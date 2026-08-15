import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthContext.jsx'
import AppShell from './components/AppShell.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Pay from './pages/Pay.jsx'
import Documents from './pages/Documents.jsx'
import Perks from './pages/Perks.jsx'
import Locations from './pages/Locations.jsx'
import Performance from './pages/Performance.jsx'
import Retirement from './pages/Retirement.jsx'
import UserPreferences from './pages/UserPreferences.jsx'
import HelpCenter from './pages/HelpCenter.jsx'
import AdminPanel from './pages/AdminPanel.jsx'

function RequireAuth({ children }) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()
  return isLoggedIn ? children : <Navigate to="/login" replace state={{ from: location.pathname }} />
}

export default function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="min-h-screen w-full bg-app-bg">
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />} />
        <Route
          element={
            <RequireAuth>
              <AppShell />
            </RequireAuth>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/retirement" element={<Retirement />} />
          <Route path="/preferences" element={<UserPreferences />} />
          <Route path="/help" element={<HelpCenter />} />
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminPanel />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </div>
  )
}
