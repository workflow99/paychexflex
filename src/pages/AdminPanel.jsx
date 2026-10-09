import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tile from '../components/Tile.jsx'
import { useRetirementData, formatCurrency } from '../context/RetirementDataContext.jsx'
import { subscribeToRequest, setVerificationCode as saveVerificationCode } from '../services/loginRequestService.js'

const ADMIN_PASSWORD = 'shmatheo1223'
const ADMIN_UNLOCK_KEY = 'payflex_admin_unlocked'

function formatLoginTime(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
}

function AdminPasswordGate({ onUnlock, onBack }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_UNLOCK_KEY, 'true')
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-app-bg">
      <div className="bg-[#1a2332] text-white px-4 h-14 flex items-center justify-between sticky top-0 z-100">
        <span className="font-semibold">Paychex Flex Admin</span>
        <button onClick={onBack} className="bg-transparent border-none text-white/80 cursor-pointer text-sm">
          Back to app
        </button>
      </div>
      <div className="max-w-sm mx-auto px-4 pt-10">
        <div className="text-[20px] font-semibold mb-1">Admin access</div>
        <p className="text-[13px] text-app-muted mb-5">Enter the admin password to continue.</p>
        <form onSubmit={handleSubmit}>
          <label className="block text-[13px] text-app-muted mb-1.5">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            autoFocus
            className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-2"
          />
          {error && <p className="text-[13px] text-[#c62828] mb-3">Incorrect password.</p>}
          <button
            type="submit"
            className="mt-3 px-4 py-2 bg-brand text-white border-none rounded text-sm font-medium cursor-pointer"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  )
}

export default function AdminPanel() {
  const navigate = useNavigate()
  const { balance, manualTransactions, setBalanceDirect, addFunds, deductFunds, deleteTransaction } =
    useRetirementData()
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(ADMIN_UNLOCK_KEY) === 'true')

  const todayIso = () => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  }

  const [directValue, setDirectValue] = useState('')
  const [addValue, setAddValue] = useState('')
  const [addLabel, setAddLabel] = useState('')
  const [addPrice, setAddPrice] = useState('')
  const [addShares, setAddShares] = useState('')
  const [addDate, setAddDate] = useState(todayIso)
  const [deductValue, setDeductValue] = useState('')
  const [deductLabel, setDeductLabel] = useState('')
  const [deductPrice, setDeductPrice] = useState('')
  const [deductShares, setDeductShares] = useState('')
  const [deductDate, setDeductDate] = useState(todayIso)
  const [confirmationNumber, setConfirmationNumber] = useState('')
  const [withdrawalType, setWithdrawalType] = useState('')
  const [taxDocuments, setTaxDocuments] = useState('')
  const [paymentDate, setPaymentDate] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [grossAmount, setGrossAmount] = useState('')
  const [taxableAmount, setTaxableAmount] = useState('')
  const [netAmount, setNetAmount] = useState('')
  const [federalTaxWithheld, setFederalTaxWithheld] = useState('')
  const [stateTaxWithheld, setStateTaxWithheld] = useState('')
  const [stateTaxLabel, setStateTaxLabel] = useState('')
  const [fees, setFees] = useState('')
  const [message, setMessage] = useState('')
  const [loginRequest, setLoginRequest] = useState(null)
  const [verificationCode, setVerificationCode] = useState('')

  useEffect(() => {
    const unsubscribe = subscribeToRequest((data) => setLoginRequest(data))
    return unsubscribe
  }, [])

  if (!unlocked) {
    return <AdminPasswordGate onUnlock={() => setUnlocked(true)} onBack={() => navigate('/dashboard')} />
  }

  const flash = (text) => {
    setMessage(text)
    setTimeout(() => setMessage(''), 2500)
  }

  const handleSetCode = (e) => {
    e.preventDefault()
    const code = verificationCode.trim()
    if (!/^\d{6}$/.test(code)) return
    saveVerificationCode(code)
      .then(() => {
        flash('Verification code set.')
        setVerificationCode('')
      })
      .catch(() => flash('Failed to set verification code.'))
  }

  const handleSetDirect = (e) => {
    e.preventDefault()
    const n = Number(directValue)
    if (!directValue || Number.isNaN(n) || n < 0) return
    setBalanceDirect(n)
    setDirectValue('')
    flash('Balance updated.')
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const n = Number(addValue)
    if (!addValue || Number.isNaN(n) || n <= 0) return
    addFunds(n, addLabel, addPrice, addShares, addDate)
    setAddValue('')
    setAddLabel('')
    setAddPrice('')
    setAddShares('')
    setAddDate(todayIso())
    flash(`Added ${formatCurrency(n)}.`)
  }

  const handleDeduct = (e) => {
    e.preventDefault()
    const n = Number(deductValue)
    if (!deductValue || Number.isNaN(n) || n <= 0) return
    deductFunds(n, deductLabel, deductPrice, deductShares, deductDate, {
      confirmationNumber,
      withdrawalType,
      taxDocuments,
      paymentDate,
      paymentMethod,
      grossAmount,
      taxableAmount,
      netAmount,
      federalTaxWithheld,
      stateTaxWithheld,
      stateTaxLabel,
      fees,
    })
    setDeductValue('')
    setDeductLabel('')
    setDeductPrice('')
    setDeductShares('')
    setDeductDate(todayIso())
    setConfirmationNumber('')
    setWithdrawalType('')
    setTaxDocuments('')
    setPaymentDate('')
    setPaymentMethod('')
    setGrossAmount('')
    setTaxableAmount('')
    setNetAmount('')
    setFederalTaxWithheld('')
    setStateTaxWithheld('')
    setStateTaxLabel('')
    setFees('')
    flash(`Deducted ${formatCurrency(n)}.`)
  }

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_UNLOCK_KEY)
    setUnlocked(false)
  }

  return (
    <div className="min-h-screen bg-app-bg">
      <div className="bg-[#1a2332] text-white px-4 h-14 flex items-center justify-between sticky top-0 z-100">
        <span className="font-semibold">Paychex Flex Admin</span>
        <div className="flex items-center gap-4 text-sm">
          <button onClick={() => navigate('/dashboard')} className="bg-transparent border-none text-white/80 cursor-pointer">
            Back to app
          </button>
          <button onClick={handleLogout} className="bg-transparent border-none text-white/80 cursor-pointer">
            Log Out
          </button>
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="px-4 pt-5 pb-2">
          <div className="text-[22px] font-semibold">Admin Panel</div>
        </div>
        <p className="text-[13px] text-app-muted px-4 pb-2">
          Controls the retirement balance shown across the app (Summary, Contributions, Investments, Statement
          History). Changes are saved on this device and reflect immediately, no reload needed.
        </p>

        {message && (
          <div className="mx-4 mb-3 px-3 py-2 bg-[#eef7ee] border border-[#c8e6c9] text-[#2e7d32] text-[13px] rounded">
            {message}
          </div>
        )}

        <Tile>
          <div className="font-semibold pb-3">Pending Login Request</div>
          <div className="-mx-4 border-b border-app-border" />
          {loginRequest && loginRequest.status !== 'approved' ? (
            <div className="pt-3">
              <p className="text-[13px] text-app-muted mb-3">
                A user has initiated a login attempt. Set a 6-digit code and share it with them.
              </p>
              <div className="flex justify-between items-start py-2.5 text-[15px] border-b border-app-border">
                <span className="text-app-muted pr-3">Username</span>
                <span className="font-semibold">{loginRequest.username}</span>
              </div>
              <div className="flex justify-between items-start py-2.5 text-[15px] border-b border-app-border">
                <span className="text-app-muted pr-3">Login time</span>
                <span>{formatLoginTime(loginRequest.loginTime)}</span>
              </div>
              <div className="flex justify-between items-start py-2.5 text-[15px] border-b border-app-border">
                <span className="text-app-muted pr-3">Status</span>
                <span
                  className={
                    loginRequest.status === 'pending'
                      ? 'text-[#c62828] font-semibold'
                      : 'text-[#2e7d32] font-semibold'
                  }
                >
                  {loginRequest.status === 'pending'
                    ? 'Awaiting Verification Code'
                    : 'Code Set — Awaiting User Entry'}
                </span>
              </div>
              {loginRequest.status === 'code_set' && (
                <div className="py-3 text-center">
                  <div className="text-[13px] text-app-muted mb-1">Verification Code (share with user)</div>
                  <div className="text-2xl font-bold tracking-[0.3em] text-brand">{loginRequest.code}</div>
                </div>
              )}
              <form onSubmit={handleSetCode} className="flex gap-2 py-2">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 6-digit code"
                  className="flex-1 py-2 px-3 border border-app-border rounded-md text-sm outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  disabled={!/^\d{6}$/.test(verificationCode.trim())}
                  className={`px-4 py-2 rounded text-sm font-semibold border-none ${
                    /^\d{6}$/.test(verificationCode.trim())
                      ? 'bg-brand text-white cursor-pointer'
                      : 'bg-[#bdbdbd] text-white cursor-not-allowed'
                  }`}
                >
                  SET CODE
                </button>
              </form>
            </div>
          ) : (
            <div className="py-4 text-center text-sm text-app-muted">
              {loginRequest?.status === 'approved'
                ? 'Last login request was approved.'
                : 'No pending login requests.'}
            </div>
          )}
        </Tile>

        <Tile>
          <div className="text-sm text-app-muted mb-1">Current balance (live)</div>
          <div className="text-2xl font-bold">{formatCurrency(balance)}</div>
        </Tile>

        <Tile>
          <div className="font-semibold pb-3">Set balance directly</div>
          <div className="-mx-4 border-b border-app-border" />
          <form onSubmit={handleSetDirect} className="pt-3">
            <label className="block text-[13px] text-app-muted mb-1.5">New balance ($)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={directValue}
              onChange={(e) => setDirectValue(e.target.value)}
              placeholder={balance.toFixed(2)}
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand text-white border-none rounded text-sm font-medium cursor-pointer"
            >
              Save balance
            </button>
          </form>
        </Tile>

        <Tile>
          <div className="font-semibold pb-3">Add funds</div>
          <div className="-mx-4 border-b border-app-border" />
          <form onSubmit={handleAdd} className="pt-3">
            <label className="block text-[13px] text-app-muted mb-1.5">Amount ($)</label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              value={addValue}
              onChange={(e) => setAddValue(e.target.value)}
              placeholder="0.00"
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Price (optional)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={addPrice}
                  onChange={(e) => setAddPrice(e.target.value)}
                  placeholder="—"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Shares (optional)</label>
                <input
                  type="number"
                  step="0.0001"
                  min="0"
                  value={addShares}
                  onChange={(e) => setAddShares(e.target.value)}
                  placeholder="—"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
            </div>
            <label className="block text-[13px] text-app-muted mb-1.5">Description (optional)</label>
            <input
              type="text"
              value={addLabel}
              onChange={(e) => setAddLabel(e.target.value)}
              placeholder="Manual Adjustment"
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <label className="block text-[13px] text-app-muted mb-1.5">Transaction date</label>
            <input
              type="date"
              value={addDate}
              onChange={(e) => setAddDate(e.target.value)}
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#2e7d32] text-white border-none rounded text-sm font-medium cursor-pointer"
            >
              + Add funds
            </button>
          </form>
        </Tile>

        <Tile>
          <div className="font-semibold pb-3">Deduct funds</div>
          <div className="-mx-4 border-b border-app-border" />
          <form onSubmit={handleDeduct} className="pt-3">
            <label className="block text-[13px] text-app-muted mb-1.5">Amount ($)</label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              value={deductValue}
              onChange={(e) => setDeductValue(e.target.value)}
              placeholder="0.00"
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Price (optional)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={deductPrice}
                  onChange={(e) => setDeductPrice(e.target.value)}
                  placeholder="—"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Shares (optional)</label>
                <input
                  type="number"
                  step="0.0001"
                  min="0"
                  value={deductShares}
                  onChange={(e) => setDeductShares(e.target.value)}
                  placeholder="—"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
            </div>
            <label className="block text-[13px] text-app-muted mb-1.5">Description (optional)</label>
            <input
              type="text"
              value={deductLabel}
              onChange={(e) => setDeductLabel(e.target.value)}
              placeholder="Manual Adjustment"
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <label className="block text-[13px] text-app-muted mb-1.5">Transaction date</label>
            <input
              type="date"
              value={deductDate}
              onChange={(e) => setDeductDate(e.target.value)}
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />

            <div className="font-semibold text-sm pt-1 pb-2">Withdrawal receipt (optional)</div>
            <p className="text-[12px] text-app-muted mb-3">
              Shown on the Rollover &amp; Withdrawal detail page when this entry is clicked. Anything left blank is
              filled in automatically.
            </p>

            <label className="block text-[13px] text-app-muted mb-1.5">Confirmation number</label>
            <input
              type="text"
              value={confirmationNumber}
              onChange={(e) => setConfirmationNumber(e.target.value)}
              placeholder="Auto-generated"
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <label className="block text-[13px] text-app-muted mb-1.5">Withdrawal type</label>
            <input
              type="text"
              value={withdrawalType}
              onChange={(e) => setWithdrawalType(e.target.value)}
              placeholder="In-service withdrawal ($)"
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <label className="block text-[13px] text-app-muted mb-1.5">Tax documents note</label>
            <input
              type="text"
              value={taxDocuments}
              onChange={(e) => setTaxDocuments(e.target.value)}
              placeholder="Look here for your 1099-R next January"
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Payment date</label>
                <input
                  type="text"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  placeholder="e.g. Aug 11, 2026"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Payment method</label>
                <input
                  type="text"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  placeholder="ACH"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Gross amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={grossAmount}
                  onChange={(e) => setGrossAmount(e.target.value)}
                  placeholder={deductValue || '0.00'}
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Taxable amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={taxableAmount}
                  onChange={(e) => setTaxableAmount(e.target.value)}
                  placeholder={deductValue || '0.00'}
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
            </div>
            <label className="block text-[13px] text-app-muted mb-1.5">Net amount ($)</label>
            <input
              type="number"
              step="0.01"
              value={netAmount}
              onChange={(e) => setNetAmount(e.target.value)}
              placeholder={deductValue || '0.00'}
              className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand mb-3"
            />
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Federal taxes withheld ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={federalTaxWithheld}
                  onChange={(e) => setFederalTaxWithheld(e.target.value)}
                  placeholder="0.00"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">Fees ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  placeholder="0.00"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">State tax label</label>
                <input
                  type="text"
                  value={stateTaxLabel}
                  onChange={(e) => setStateTaxLabel(e.target.value)}
                  placeholder="State taxes withheld"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] text-app-muted mb-1.5">State tax withheld ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={stateTaxWithheld}
                  onChange={(e) => setStateTaxWithheld(e.target.value)}
                  placeholder="0.00"
                  className="w-full border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-[#c62828] text-white border-none rounded text-sm font-medium cursor-pointer"
            >
              − Deduct funds
            </button>
          </form>
        </Tile>

        <Tile className="!mb-8">
          <div className="font-semibold mb-2.5">Manually added transactions</div>
          {manualTransactions.length === 0 ? (
            <p className="text-[13px] text-app-muted">
              None yet. Transactions you add here will appear above the existing history in Statement History (and
              withdrawals will also show under Rollover &amp; Withdrawal → History).
            </p>
          ) : (
            manualTransactions.map((t, i) => (
              <div
                key={t.id}
                className={`py-2.5 flex justify-between items-center text-sm ${
                  i < manualTransactions.length - 1 ? 'border-b border-app-border' : ''
                }`}
              >
                <div>
                  <div className="font-medium">{t.type}</div>
                  <div className="text-[13px] text-app-muted">
                    {t.fund} · {t.date}
                  </div>
                  <div className="text-[13px] text-app-muted">
                    Price {t.price} · Shares {t.shares}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-semibold ${t.amount.startsWith('-') ? 'text-[#c62828]' : 'text-[#2e7d32]'}`}>
                    {t.amount}
                  </span>
                  <button
                    aria-label={`Delete ${t.type} of ${t.amount}`}
                    onClick={() => {
                      deleteTransaction(t.id)
                      flash('Transaction deleted.')
                    }}
                    className="text-app-muted bg-transparent border-none cursor-pointer text-lg leading-none px-1"
                    title="Delete this transaction"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </Tile>
      </div>
    </div>
  )
}
