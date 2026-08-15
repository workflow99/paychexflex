const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconMenu(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} {...props}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function IconMailFilled(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

export function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function IconCard(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M12 12h.01" />
    </svg>
  )
}

export function IconDoc(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export function IconPiggy(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <ellipse cx="11.5" cy="13" rx="7.5" ry="5.5" />
      <path d="M3.5 12.5c-1.1-.2-1.8-.9-1.8-1.8s.8-1.5 1.9-1.4" />
      <path d="M16.5 8.3c.7-1.4 2.3-2 3.4-1.2.9.6.7 1.9-.4 2.4" />
      <path d="M13 10.6a1.9 1.9 0 0 0-1.8-1.2c-1.1 0-2 .6-2 1.4s.8 1.2 2 1.4 2 .6 2 1.4-.9 1.4-2 1.4a2.1 2.1 0 0 1-2-1.3" />
      <line x1="9.5" y1="18.5" x2="9.5" y2="20" />
      <line x1="13.5" y1="18.5" x2="13.5" y2="20" />
    </svg>
  )
}

export function IconHelp(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

export function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <line x1="8" y1="11.5" x2="8.01" y2="11.5" />
      <line x1="12" y1="11.5" x2="12.01" y2="11.5" />
      <line x1="16" y1="11.5" x2="16.01" y2="11.5" />
    </svg>
  )
}

export function IconBooks(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="16" width="18" height="3" rx="1" />
      <rect x="4" y="12" width="16" height="3" rx="1" />
      <rect x="5" y="8" width="14" height="3" rx="1" />
      <path d="M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />
    </svg>
  )
}

export function IconWallet(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z" />
      <path d="M16 3H6a2 2 0 0 0-2 2v2" />
      <path d="M17 13h.01" />
    </svg>
  )
}

export function IconHouse(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
      <path d="M9 21v-6h6v6" />
    </svg>
  )
}

export function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

export function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function IconChevronsLeft(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <polyline points="18 17 12 12 18 7" />
      <polyline points="11 17 5 12 11 7" />
    </svg>
  )
}

export function IconLogout(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

export function IconClipboard(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
    </svg>
  )
}

export function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="7.5" y1="2" x2="7.5" y2="6" />
      <line x1="16.5" y1="2" x2="16.5" y2="6" />
    </svg>
  )
}

export function IconDotsVertical(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  )
}

export function IconEyeSlash(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A10.4 10.4 0 0 1 12 4c7 0 11 7 11 7a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

export function IconEye(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function IconCheckSquare(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <polyline points="8 12.5 11 15.5 16 9" />
    </svg>
  )
}

export function IconAward(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="8" r="6" />
      <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
    </svg>
  )
}

export function IconCake(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 21h16" />
      <path d="M12 11V7" />
      <path d="M9 7c0-1 1-1.5 1-2.5S9 3 9 3" />
      <path d="M12 7c0-1 1-1.5 1-2.5S12 3 12 3" />
      <path d="M15 7c0-1 1-1.5 1-2.5S15 3 15 3" />
      <path d="M4 16h16" />
    </svg>
  )
}

export function IconBuilding(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <rect x="7.25" y="5.5" width="2.5" height="2.5" />
      <rect x="14.25" y="5.5" width="2.5" height="2.5" />
      <rect x="7.25" y="10.5" width="2.5" height="2.5" />
      <rect x="14.25" y="10.5" width="2.5" height="2.5" />
      <rect x="9.5" y="16" width="5" height="6" />
    </svg>
  )
}

export function IconFactory(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 21V10l6 4v-4l6 4V6l6 4v11z" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  )
}

export function IconBell(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

export function IconBarChart(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <line x1="4" y1="20" x2="4" y2="12" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="20" y1="20" x2="20" y2="14" />
    </svg>
  )
}

export function IconInfo(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="11" x2="12" y2="16" />
      <line x1="12" y1="7.5" x2="12" y2="7.51" />
    </svg>
  )
}

export function IconWarning(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

export function IconExternalLink(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function IconFilter(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

export function IconRocket(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export function IconActivity(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" />
      <path d="M10 8h4" />
      <path d="M10 12h4" />
      <circle cx="18" cy="17" r="4" />
      <path d="M18 15.5V17l1 1" />
    </svg>
  )
}

export function IconCoins(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="9" cy="9" r="6" />
      <path d="M14.5 8a6 6 0 1 1 0 10.8" />
      <path d="M9 6.5v5" />
      <path d="M6.7 9h4.6" />
    </svg>
  )
}

export function IconHeadset(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

export function IconSwap(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M17 3l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 21l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

export function IconGauge(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 15l3.5-5" />
      <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconIdCard(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <circle cx="8" cy="10.5" r="2" />
      <path d="M5 16c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5" />
      <line x1="14" y1="9" x2="19" y2="9" />
      <line x1="14" y1="12" x2="19" y2="12" />
      <line x1="14" y1="15" x2="17" y2="15" />
    </svg>
  )
}

export function IconDollarCard(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M14.2 10a2.3 2.3 0 0 0-2.2-1.5c-1.4 0-2.4.7-2.4 1.8s.9 1.5 2.4 1.8 2.4.7 2.4 1.8-1 1.8-2.4 1.8A2.5 2.5 0 0 1 9.5 14.2" />
      <line x1="12" y1="7.3" x2="12" y2="8.5" />
      <line x1="12" y1="15.5" x2="12" y2="16.7" />
    </svg>
  )
}

export function IconDocLines(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  )
}

export function IconTag(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20.59 13.41 12 22l-9-9V4h9l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7.5" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconIdCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="10" cy="9" r="2" />
      <path d="M7 15.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5" />
      <polyline points="13.5 15 15.2 16.7 18 13" />
    </svg>
  )
}

export function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export function IconSend(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

export function IconUsers(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function IconPlayCircle(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  )
}
