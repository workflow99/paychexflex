import { useOutletContext, useNavigate } from 'react-router-dom'
import { IconSearch, IconSend, IconChevronDown } from '../components/icons.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'

const stars = [
  { top: '12px', left: '18px', size: 14 },
  { top: '8px', left: '55%', size: 10 },
  { top: '28px', left: '8%', size: 8 },
  { top: '20px', right: '28%', size: 12 },
  { bottom: '45px', left: '4%', size: 10 },
  { bottom: '55px', right: '8%', size: 9 },
]

function Star({ top, left, right, bottom, size }) {
  return (
    <svg
      className="absolute text-white/70"
      style={{ top, left, right, bottom, width: size, height: size }}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function HelpBot() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 shrink-0">
      <defs>
        <linearGradient id="botGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8F4FD" />
          <stop offset="100%" stopColor="#B8DDF5" />
        </linearGradient>
        <linearGradient id="botDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8D0F0" />
          <stop offset="100%" stopColor="#7BBCE8" />
        </linearGradient>
      </defs>
      <rect x="22" y="12" width="44" height="44" rx="10" fill="url(#botDark)" transform="translate(4,4)" />
      <rect x="18" y="8" width="44" height="44" rx="10" fill="url(#botGrad)" stroke="#fff" strokeWidth="1.5" />
      <circle cx="32" cy="26" r="3.5" fill="#1a3a5c" />
      <circle cx="48" cy="26" r="3.5" fill="#1a3a5c" />
      <path d="M32 34 Q40 42 48 34" stroke="#1a3a5c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M22 48 L14 58 L28 50" fill="url(#botGrad)" stroke="#fff" strokeWidth="1" />
    </svg>
  )
}

function VideoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4A9FD8" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="#4A9FD8" />
    </svg>
  )
}

function StarBadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" {...props}>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="#F5A623"
        stroke="#F5A623"
      />
    </svg>
  )
}

function TagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" {...props}>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" fill="#F5A623" stroke="#F5A623" />
      <line x1="7" y1="7" x2="7.01" y2="7" stroke="#fff" strokeWidth="2.5" />
    </svg>
  )
}

function DocIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4A9FD8" strokeWidth="1.8" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#4A9FD8" stroke="#4A9FD8" />
      <polyline points="14 2 14 8 20 8" stroke="#fff" strokeWidth="1.5" />
      <line x1="16" y1="13" x2="8" y2="13" stroke="#fff" strokeWidth="1.5" />
      <line x1="16" y1="17" x2="8" y2="17" stroke="#fff" strokeWidth="1.5" />
      <polyline points="10 9 9 9 8 9" stroke="#fff" strokeWidth="1.5" />
    </svg>
  )
}

function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="1.8" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="#8e8e93" stroke="#8e8e93" />
      <circle cx="9" cy="7" r="4" fill="#fff" stroke="#8e8e93" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="#8e8e93" stroke="#8e8e93" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" fill="#fff" stroke="#8e8e93" />
    </svg>
  )
}

const categories = [
  { Icon: VideoIcon, label: 'Video training and guides' },
  { Icon: StarBadgeIcon, label: 'Get to know Paychex Flex' },
  { Icon: TagIcon, label: 'My Perks', to: '/perks' },
  { Icon: DocIcon, label: 'Approvals' },
  { Icon: DocIcon, label: 'Documents', to: '/documents' },
  { Icon: UsersIcon, label: 'Employment details' },
]

export default function HelpCenter() {
  const { pageLoading } = useOutletContext()
  const navigate = useNavigate()

  if (pageLoading) {
    return (
      <div>
        <div className="px-4 pt-5 pb-2 text-[22px] font-semibold">Help Center</div>
        <PageSkeleton tiles={[{ lines: 3 }, { lines: 4 }]} />
      </div>
    )
  }

  return (
    <div>
      <div className="relative overflow-hidden bg-linear-to-br from-[#4A9FD8] to-[#0066b2] text-white px-4 py-6">
        {stars.map((s, i) => (
          <Star key={i} {...s} />
        ))}
        <div className="relative flex items-center justify-between gap-3">
          <div className="text-xl font-semibold">Have a question?</div>
          <HelpBot />
        </div>
        <div className="relative flex items-center gap-2 mt-5 bg-white rounded-full pl-4 pr-1.5 py-1.5">
          <input
            type="text"
            placeholder="Ask our AI chatbot"
            readOnly
            className="flex-1 border-none outline-none bg-transparent text-app-text text-sm placeholder:text-app-muted"
          />
          <button
            aria-label="Send"
            className="w-8 h-8 rounded-full bg-brand text-white border-none cursor-pointer flex items-center justify-center shrink-0"
          >
            <IconSend className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="px-4 pt-5 pb-2">
        <div className="flex justify-between items-center mb-4">
          <div className="text-[17px] font-semibold">Browse by category</div>
          <button className="inline-flex items-center gap-1 text-brand text-[13px] font-medium bg-transparent border-none cursor-pointer p-0">
            Show more <IconChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <div className="flex-1 flex items-center gap-2 border border-app-border rounded-md px-3 py-2">
            <IconSearch className="w-4 h-4 text-app-muted shrink-0" strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Search articles"
              className="flex-1 border-none outline-none bg-transparent text-sm"
            />
          </div>
          <button className="px-4 py-2 bg-brand text-white border-none rounded-md text-sm font-medium cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="pb-4">
        {categories.map((c, i) => (
          <div
            key={c.label}
            onClick={c.to ? () => navigate(c.to) : undefined}
            className={`flex items-center gap-3.5 px-4 py-3.5 border-b border-app-border ${
              c.to ? 'cursor-pointer' : ''
            } ${i === categories.length - 1 ? 'border-b-0' : ''}`}
          >
            <div className="w-9 h-9 rounded-full bg-app-bg flex items-center justify-center shrink-0">
              <c.Icon className="w-5 h-5" />
            </div>
            <div className="text-[15px]">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
