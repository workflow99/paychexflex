export default function Row({ label, children, className = '', last = false }) {
  return (
    <div
      className={`flex justify-between items-start py-3 text-[15px] ${
        last ? '' : 'border-b border-app-border'
      } ${className}`}
    >
      <span className="text-app-muted pr-3">{label}</span>
      <span className="text-right">{children}</span>
    </div>
  )
}
