import { useOutletContext } from 'react-router-dom'
import Tile from '../components/Tile.jsx'
import { IconClipboard } from '../components/icons.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'

export default function Performance() {
  const { pageLoading } = useOutletContext()

  if (pageLoading) {
    return (
      <div>
        <div className="text-[22px] font-semibold px-4 pt-5 pb-3">Performance</div>
        <PageSkeleton tiles={[{ lines: 2 }, { lines: 3 }]} />
      </div>
    )
  }

  return (
    <div>
      <div className="text-[22px] font-semibold px-4 pt-5 pb-3">Performance</div>
      <Tile className="flex justify-between items-center">
        <div>
          <div className="font-semibold">My Performance</div>
          <div className="text-[13px] text-app-muted mt-0.5">View my reviews and job performance.</div>
        </div>
        <span className="text-app-muted text-xl">›</span>
      </Tile>
      <Tile>
        <div className="font-semibold pb-3">Reviews to Complete</div>
        <div className="-mx-4 border-b border-app-border" />
        <div className="text-center py-6 text-app-muted">
          <div className="w-24 h-24 rounded-full bg-app-bg flex items-center justify-center mx-auto mb-3">
            <IconClipboard className="w-10 h-10 text-app-muted" />
          </div>
          <h3 className="text-app-text text-base mb-1.5">Nothing to do yet.</h3>
          <p className="text-[13px] text-app-muted">When a review is assigned to you, you'll find it here.</p>
        </div>
      </Tile>
    </div>
  )
}
