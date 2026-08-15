import { NavLink } from 'react-router-dom'
import {
  IconGauge,
  IconIdCard,
  IconDollarCard,
  IconDocLines,
  IconTag,
  IconBuilding,
  IconIdCheck,
  IconHelp,
  IconChat,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
} from './icons.jsx'
import retirementPiggybank from '../assets/dashboard/piggyicon.jpg'

const mainItems = [
  { to: '/dashboard', label: 'Dashboard', Icon: IconGauge },
  { to: '/profile', label: 'My Profile', Icon: IconIdCard },
  { to: '/pay', label: 'My Pay', Icon: IconDollarCard },
  { to: '/documents', label: 'My Documents', Icon: IconDocLines },
  { to: '/perks', label: 'My Perks', Icon: IconTag },
  { to: '/locations', label: 'Company Locations', Icon: IconBuilding },
  { to: '/performance', label: 'Performance', Icon: IconIdCheck },
  { to: '/retirement', label: 'My Retirement', image: retirementPiggybank },
]

export default function Drawer({ open, onClose, collapsed, onToggleCollapse }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/45 z-150 transition-opacity duration-250 ease-in-out lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 h-full bg-app-card z-200 flex flex-col overflow-y-auto overflow-x-hidden transition-[transform,width] duration-300 ease-[cubic-bezier(.4,0,.2,1)] lg:sticky lg:top-0 lg:h-screen lg:shrink-0 lg:translate-x-0 lg:z-auto lg:border-r lg:border-app-border ${
          open ? 'translate-x-0' : '-translate-x-full'
        } ${collapsed ? 'w-70 lg:w-18' : 'w-70'}`}
      >
        <div className="bg-brand text-white px-4 py-4.5 flex items-center justify-between shrink-0">
          {!collapsed && (
            <span className="text-xl italic tracking-wide uppercase">
              <span className="font-extrabold">Paycheck</span> <span className="font-semibold">Flex</span>
              <sup className="text-[9px] not-italic leading-none relative top-[-8px] ml-0.5">&reg;</sup>
            </span>
          )}
          <button
            aria-label="Close menu"
            className="bg-transparent border-none text-white px-1 cursor-pointer lg:hidden flex items-center justify-center"
            onClick={onClose}
          >
            <IconChevronsLeft className="w-5 h-5" strokeWidth={2.25} />
          </button>
          <button
            aria-label="Toggle sidebar"
            className="hidden lg:flex bg-transparent border-none text-white cursor-pointer items-center justify-center w-6 h-6"
            onClick={onToggleCollapse}
            title={collapsed ? 'Expand menu' : 'Collapse menu'}
          >
            {collapsed ? <IconChevronRight className="w-4 h-4" /> : <IconChevronLeft className="w-4 h-4" />}
          </button>
        </div>
        <div className="py-2">
          {!collapsed && (
            <div className="px-4 py-2 text-[11px] uppercase text-app-muted font-bold tracking-wide">Main</div>
          )}
          {mainItems.map(({ to, label, Icon, image }) => (
            <NavLink key={to} to={to} onClick={onClose} title={label}>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3.5 py-3.5 pr-4 text-[15px] cursor-pointer whitespace-nowrap border-l-4 ${
                    isActive ? 'bg-[#f0f7ff] text-brand border-brand pl-3' : 'text-app-text border-transparent pl-3'
                  }`}
                >
                  {image ? (
                    <img src={image} alt="" className="w-5.5 h-5.5 shrink-0" />
                  ) : (
                    <Icon
                      className={`w-5.5 h-5.5 shrink-0 ${isActive ? 'text-brand' : 'text-[#8a96a3]'}`}
                      strokeWidth={1.75}
                    />
                  )}
                  {!collapsed && label}
                </div>
              )}
            </NavLink>
          ))}
        </div>
        <div className="h-px bg-app-border mx-4 my-2" />
        <div className="py-2">
          {!collapsed && (
            <div className="px-4 py-2 text-[11px] uppercase text-app-muted font-bold tracking-wide">Other</div>
          )}
          <NavLink to="/help" onClick={onClose} title="Help Center">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3.5 py-3.5 pr-4 text-[15px] cursor-pointer whitespace-nowrap border-l-4 ${
                  isActive ? 'bg-[#f0f7ff] text-brand border-brand pl-3' : 'text-app-text border-transparent pl-3'
                }`}
              >
                <IconHelp
                  className={`w-5.5 h-5.5 shrink-0 ${isActive ? 'text-brand' : 'text-[#8a96a3]'}`}
                  strokeWidth={1.75}
                />
                {!collapsed && 'Help Center'}
              </div>
            )}
          </NavLink>
        </div>
        <div className="mt-auto">
          <div
            className="px-4 py-3.5 flex items-center justify-center gap-2.5 text-[15px] text-app-text cursor-pointer whitespace-nowrap"
            title="Chat now"
          >
            <div className="w-7 h-7 rounded bg-brand text-white flex items-center justify-center shrink-0">
              <IconChat className="w-4.5 h-4.5" strokeWidth={2} />
            </div>
            {!collapsed && 'Chat now'}
          </div>
          {!collapsed && (
            <div className="text-xs text-app-muted text-center px-4 pb-4 pt-1">
              Don't see all your features? <a href="#" className="text-brand">Learn More</a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
