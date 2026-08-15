import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconMailFilled, IconMenu } from './icons.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { employee } from '../data/mockData.js'

export default function Header({ onMenuClick }) {
  const [mailOpen, setMailOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const closeAll = () => {
    setMailOpen(false)
    setAccountOpen(false)
  }

  const handleLogout = () => {
    closeAll()
    logout()
    navigate('/login')
  }

  return (
    <div className="bg-brand text-white px-4 h-14 flex items-center justify-between sticky top-0 z-100 shadow-sm">
      <div className="flex items-center gap-1.5">
        <button
          aria-label="Open menu"
          className="bg-transparent border-2 border-brand-dark rounded text-white w-9 h-9 flex items-center justify-center cursor-pointer lg:hidden"
          onClick={onMenuClick}
        >
          <IconMenu width={20} height={20} />
        </button>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="relative">
          <button
            aria-label="Messages"
            className="relative bg-transparent border-none text-white w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setAccountOpen(false)
              setMailOpen((v) => !v)
            }}
          >
            <IconMailFilled />
          </button>
          {mailOpen && (
            <>
              <div className="fixed inset-0 z-100" onClick={closeAll} />
              <div className="absolute right-0 top-12 w-72 bg-app-card text-app-text rounded-lg shadow-xl border border-app-border z-101 p-6 text-center">
                <div className="font-semibold mb-1">You're caught up</div>
                <div className="text-sm text-app-muted">There are no messages to review.</div>
              </div>
            </>
          )}
        </div>
        <div className="relative">
          <button
            aria-label="Account menu"
            className="flex items-center gap-0.5 bg-transparent border-none text-white cursor-pointer"
            onClick={() => {
              setMailOpen(false)
              setAccountOpen((v) => !v)
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white text-brand flex items-center justify-center font-bold text-xs">
              {employee.initials}
            </div>
            <span className="text-[10px]">▼</span>
          </button>
          {accountOpen && (
            <>
              <div className="fixed inset-0 z-100" onClick={closeAll} />
              <div className="absolute right-0 top-12 w-64 bg-app-card text-app-text rounded-lg shadow-xl border border-app-border z-101 overflow-hidden">
                <div className="flex items-center gap-3 p-4">
                  <div className="w-10 h-10 rounded-full bg-[#e8eaf6] text-[#5c6bc0] flex items-center justify-center font-bold text-sm">
                    {employee.initials}
                  </div>
                  <div className="font-semibold">
                    {employee.legalFirstName} {employee.legalLastName}
                  </div>
                </div>
                <div className="border-t border-app-border">
                  <button
                    className="w-full text-left px-4 py-3 text-sm hover:bg-app-bg cursor-pointer"
                    onClick={() => {
                      closeAll()
                      navigate('/preferences')
                    }}
                  >
                    User Preferences
                  </button>
                </div>
                <div className="border-t border-app-border">
                  <button
                    className="w-full text-left px-4 py-3 text-sm hover:bg-app-bg cursor-pointer"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
