import { useOutletContext } from 'react-router-dom'
import { IconDoc } from '../components/icons.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'

export default function Documents() {
  const { pageLoading } = useOutletContext()

  return (
    <div>
      <div className="text-[22px] font-semibold px-4 py-5">My Documents</div>
      {pageLoading ? (
        <PageSkeleton tiles={[{ lines: 3 }]} />
      ) : (
        <div className="text-center py-15 px-6 text-app-muted">
          <div className="w-24 h-24 rounded-full bg-app-bg flex items-center justify-center mx-auto mb-4">
            <IconDoc className="w-10 h-10 text-app-muted" />
          </div>
          <h3 className="text-app-text text-base mb-1.5">No Documents Yet</h3>
          <p>Your important documents will live here.</p>
        </div>
      )}
    </div>
  )
}
