import { useOutletContext } from 'react-router-dom'
import { locations } from '../data/mockData.js'
import { IconBuilding, IconFactory } from '../components/icons.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'

const iconMap = {
  building: IconBuilding,
  factory: IconFactory,
}

export default function Locations() {
  const { pageLoading } = useOutletContext()

  return (
    <div>
      <div className="text-[22px] font-semibold px-4 pt-5 pb-3">Work Locations</div>
      <div className="px-4 pb-3">
        <input
          type="text"
          placeholder="Search locations"
          className="w-full py-2.5 px-3 border border-app-border rounded-md text-sm"
        />
      </div>
      {pageLoading && <PageSkeleton tiles={[{ lines: 2 }, { lines: 2 }]} />}
      {!pageLoading && locations.map((loc) => {
        const Icon = iconMap[loc.icon]
        return (
          <div key={loc.name} className="mx-4 my-3 border border-app-border rounded-lg overflow-hidden">
            <div className="h-35 flex items-center justify-center" style={{ background: loc.imgBg }}>
              <Icon className="w-16 h-16 text-app-muted" strokeWidth={1.2} />
            </div>
            <div className="p-4">
              <h4 className="text-base mb-1">{loc.name}</h4>
              <p className="text-sm text-app-muted leading-snug">
                {loc.address.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < loc.address.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
