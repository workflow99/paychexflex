import { IconDoc } from './icons.jsx'

export default function PdfFileIcon({ className = 'w-10 h-10' }) {
  return (
    <div className={`relative ${className}`}>
      <IconDoc className="w-full h-full text-app-muted" strokeWidth={1.5} />
      <span className="absolute left-1/2 -translate-x-1/2 bottom-[22%] bg-[#e5384f] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm tracking-wide leading-none">
        PDF
      </span>
    </div>
  )
}
