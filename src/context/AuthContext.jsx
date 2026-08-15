import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const SESSION_KEY = 'payflex_auth_session'
const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000 // 30 minutes
const ACTIVITY_THROTTLE_MS = 15 * 1000
const CHECK_INTERVAL_MS = 30 * 1000

function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const session = JSON.parse(raw)
    if (Date.now() - session.lastActivity < INACTIVITY_TIMEOUT_MS) return session
  } catch {
    // ignore corrupt storage
  }
  return null
}

function writeSession() {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ lastActivity: Date.now() }))
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => readSession() !== null)

  const login = () => {
    writeSession()
    setIsLoggedIn(true)
  }

  const logout = () => {
    clearSession()
    setIsLoggedIn(false)
  }

  // Keep the session's last-activity timestamp fresh while the user interacts with the app.
  useEffect(() => {
    if (!isLoggedIn) return

    let lastRecorded = 0
    const bump = () => {
      const now = Date.now()
      if (now - lastRecorded < ACTIVITY_THROTTLE_MS) return
      lastRecorded = now
      writeSession()
    }

    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart']
    events.forEach((evt) => window.addEventListener(evt, bump, { passive: true }))

    // Auto-logout once the session has been inactive past the timeout.
    const interval = setInterval(() => {
      if (readSession() === null) {
        clearSession()
        setIsLoggedIn(false)
      }
    }, CHECK_INTERVAL_MS)

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, bump))
      clearInterval(interval)
    }
  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
