import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { IconEye, IconEyeSlash } from '../components/icons.jsx'
import TopLoadingBar from '../components/TopLoadingBar.jsx'

const VALID_USERNAME = 'EddieJ.4319'
const VALID_PASSWORD = 'Mutt1-Wingo2'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  const canSubmit = username.trim() !== '' && password.trim() !== ''

  const handleLogin = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
      setError(true)
      return
    }
    setError(false)
    setSigningIn(true)
    setTimeout(() => {
      login()
      navigate(location.state?.from || '/dashboard')
    }, 2000)
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
        <form className="px-4 pt-6 pb-10 md:px-8" onSubmit={handleLogin}>
          <div className="mb-5.5">
            <label className="block text-[13px] text-app-muted mb-1.5 font-medium">Username*</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError(false)
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
      </div>
    </div>
  )
}
