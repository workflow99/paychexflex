import Tile from './Tile.jsx'

const WIDTHS = ['60%', '92%', '78%', '55%']

export function SkeletonTile({ lines = 3, className = '' }) {
  return (
    <Tile className={className}>
      <div className="space-y-3 py-1">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="skel h-3" style={{ width: WIDTHS[i % WIDTHS.length] }} />
        ))}
      </div>
    </Tile>
  )
}

export default function PageSkeleton({ tiles = [{ lines: 3 }, { lines: 4 }, { lines: 2 }] }) {
  return (
    <div>
      {tiles.map((t, i) => (
        <SkeletonTile key={i} {...t} />
      ))}
    </div>
  )
}
