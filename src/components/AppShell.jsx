import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import CompanyBar from './CompanyBar.jsx'
import Drawer from './Drawer.jsx'
import Fab from './Fab.jsx'
import TopLoadingBar from './TopLoadingBar.jsx'

export default function AppShell() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [pageLoading, setPageLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setPageLoading(true)
    const t = setTimeout(() => setPageLoading(false), 4500)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div className="lg:flex lg:min-h-screen lg:items-start">
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((v) => !v)}
      />
      <div className="min-w-0 flex-1">
        <Header onMenuClick={() => setDrawerOpen(true)} />
        {pageLoading && <TopLoadingBar />}
        <CompanyBar />
        <div className="page-fade mx-auto w-full max-w-3xl">
          <Outlet context={{ pageLoading }} />
        </div>
      </div>
      <Fab />
    </div>
  )
}
