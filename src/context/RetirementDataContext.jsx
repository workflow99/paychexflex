import { createContext, useContext, useEffect, useState } from 'react'
import { retirement } from '../data/mockData.js'

const RetirementDataContext = createContext(null)

const STORAGE_KEY = 'payflex_retirement_admin_data'

function parseCurrency(str) {
  return Number(String(str).replace(/[^0-9.-]/g, '')) || 0
}

export function formatCurrency(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// dateInput is the 'YYYY-MM-DD' string from a <input type="date">; parsed manually
// so the picked calendar day isn't shifted by local-timezone UTC conversion.
function resolveDate(dateInput) {
  if (dateInput) {
    const [y, m, d] = dateInput.split('-').map(Number)
    if (y && m && d) return new Date(y, m - 1, d)
  }
  return new Date()
}

function formatSlashDate(d) {
  return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`
}

function formatLongDate(d) {
  return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

export function getMonthToDateRange() {
  const now = new Date()
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  return `${formatLongDate(firstOfMonth)} - ${formatLongDate(now)}`
}

function generateConfirmationNumber() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let out = ''
  for (let i = 0; i < 10; i++) out += chars[Math.floor(Math.random() * chars.length)]
  return out
}

function loadInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    // ignore corrupt storage
  }
  return {
    balance: parseCurrency(retirement.currentBalance),
    manualTransactions: [],
    manualHistoryEntries: [],
  }
}

export function RetirementDataProvider({ children }) {
  const [state, setState] = useState(loadInitial)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const setBalanceDirect = (newBalance) => {
    setState((s) => ({ ...s, balance: Math.max(0, newBalance) }))
  }

  const addFunds = (amount, label, price, shares, dateInput) => {
    if (!amount || amount <= 0) return
    const id = Date.now()
    const d = resolveDate(dateInput)
    const entry = {
      id,
      date: formatSlashDate(d),
      type: 'Deposit',
      fund: label?.trim() || 'Manual Adjustment',
      price: price ? formatCurrency(Number(price)) : '—',
      shares: shares || '—',
      amount: `+${formatCurrency(amount)}`,
      rawAmount: amount,
    }
    setState((s) => ({
      ...s,
      balance: s.balance + amount,
      manualTransactions: [entry, ...s.manualTransactions],
    }))
  }

  const deductFunds = (amount, label, price, shares, dateInput, receipt = {}) => {
    if (!amount || amount <= 0) return
    const id = Date.now()
    const d = resolveDate(dateInput)
    const entry = {
      id,
      date: formatSlashDate(d),
      type: 'Withdrawal',
      fund: label?.trim() || 'Manual Adjustment',
      price: price ? formatCurrency(Number(price)) : '—',
      shares: shares ? `-${shares}` : '—',
      amount: `-${formatCurrency(amount)}`,
      rawAmount: -amount,
    }
    const historyEntry = {
      id,
      date: formatLongDate(d),
      type: 'Withdrawal',
      status: 'Money sent',
      sub: label?.trim() || 'Manual',
      detail: {
        confirmationNumber: receipt.confirmationNumber?.trim() || generateConfirmationNumber(),
        withdrawalType: receipt.withdrawalType?.trim() || 'In-service withdrawal ($)',
        taxDocuments: receipt.taxDocuments?.trim() || 'Look here for your 1099-R next January',
        paymentDate: receipt.paymentDate?.trim() || formatLongDate(d),
        paymentMethod: receipt.paymentMethod?.trim() || 'ACH',
        grossAmount: receipt.grossAmount ? formatCurrency(Number(receipt.grossAmount)) : formatCurrency(amount),
        taxableAmount: receipt.taxableAmount ? formatCurrency(Number(receipt.taxableAmount)) : formatCurrency(amount),
        netAmount: receipt.netAmount ? formatCurrency(Number(receipt.netAmount)) : formatCurrency(amount),
        federalTaxWithheld: receipt.federalTaxWithheld ? formatCurrency(Number(receipt.federalTaxWithheld)) : formatCurrency(0),
        stateTaxWithheld: receipt.stateTaxWithheld ? formatCurrency(Number(receipt.stateTaxWithheld)) : formatCurrency(0),
        stateTaxLabel: receipt.stateTaxLabel?.trim() || 'State taxes withheld',
        fees: receipt.fees ? formatCurrency(Number(receipt.fees)) : formatCurrency(0),
      },
    }
    setState((s) => ({
      ...s,
      balance: Math.max(0, s.balance - amount),
      manualTransactions: [entry, ...s.manualTransactions],
      manualHistoryEntries: [historyEntry, ...s.manualHistoryEntries],
    }))
  }

  const deleteTransaction = (id) => {
    setState((s) => {
      const tx = s.manualTransactions.find((t) => t.id === id)
      if (!tx) return s
      return {
        ...s,
        balance: Math.max(0, s.balance - (tx.rawAmount || 0)),
        manualTransactions: s.manualTransactions.filter((t) => t.id !== id),
        manualHistoryEntries: s.manualHistoryEntries.filter((h) => h.id !== id),
      }
    })
  }

  return (
    <RetirementDataContext.Provider
      value={{
        balance: state.balance,
        manualTransactions: state.manualTransactions,
        manualHistoryEntries: state.manualHistoryEntries,
        setBalanceDirect,
        addFunds,
        deductFunds,
        deleteTransaction,
      }}
    >
      {children}
    </RetirementDataContext.Provider>
  )
}

export function useRetirementData() {
  return useContext(RetirementDataContext)
}
