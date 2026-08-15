export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex border-b border-app-border bg-app-card">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange(i)}
          className={`flex-1 text-center py-3.5 px-1 text-sm font-medium relative cursor-pointer ${
            active === i ? 'text-brand' : 'text-app-muted'
          }`}
        >
          {tab}
          {active === i && (
            <span className="absolute bottom-0 left-[20%] right-[20%] h-0.5 bg-brand rounded" />
          )}
        </button>
      ))}
    </div>
  )
}
