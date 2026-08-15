import { company } from '../data/mockData.js'

export default function CompanyBar() {
  return (
    <div className="bg-app-card px-4 py-3 flex items-center gap-3 border-b border-app-border">
      <div className="w-9 h-9 bg-[#aab1bc] text-white flex items-center justify-center font-bold text-base shrink-0">
        {company.icon}
      </div>
      <div className="w-max max-w-full pr-8">
        <div className="font-semibold text-[15px] text-app-text leading-tight whitespace-nowrap">{company.name}</div>
        <div className="flex items-center justify-between gap-7 w-full">
          <span className="text-[13px] text-app-muted leading-tight">{company.id}</span>
          <span className="text-app-muted text-[10px]">▼</span>
        </div>
      </div>
    </div>
  )
}
