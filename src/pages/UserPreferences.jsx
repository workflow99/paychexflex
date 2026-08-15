import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Tabs from '../components/Tabs.jsx'
import Tile from '../components/Tile.jsx'
import { userPreferences } from '../data/mockData.js'
import PageSkeleton from '../components/SkeletonTile.jsx'

function General() {
  const [language, setLanguage] = useState(userPreferences.defaultLanguage)
  const [dirty, setDirty] = useState(false)

  return (
    <div className="px-4 pb-10">
      <div className="flex justify-end py-3">
        <button
          disabled={!dirty}
          onClick={() => setDirty(false)}
          className={`px-5 py-2 rounded font-semibold text-sm border-none ${
            dirty ? 'bg-brand text-white cursor-pointer' : 'bg-[#bdbdbd] text-white cursor-not-allowed'
          }`}
        >
          Save
        </button>
      </div>
      <Tile className="!mx-0">
        <div className="font-semibold mb-1">Default Language</div>
        <p className="text-[13px] text-app-muted mb-4">
          Select which language you would like to automatically see when you log into Paychex Flex.
        </p>
        <div className="border-t border-app-border pt-4">
          <label className="block text-[13px] text-app-muted mb-1.5">Language</label>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value)
              setDirty(true)
            }}
            className="w-full max-w-xs border-0 border-b border-[#bbb] py-2 text-base outline-none bg-transparent focus:border-brand"
          >
            {userPreferences.languages.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <p className="text-[13px] text-app-muted mt-4">Application refreshes upon apply.</p>
      </Tile>
      <Tile className="!mx-0">
        <div className="font-semibold mb-1">Notification Preferences</div>
        <p className="text-[13px] text-app-muted">
          Choose what you'd like to be notified about and how you want to receive them.
        </p>
      </Tile>
    </div>
  )
}

function ConnectedApps() {
  return (
    <div className="text-center py-10 px-4 text-app-muted">
      <p>No connected apps yet.</p>
    </div>
  )
}

export default function UserPreferences() {
  const [tab, setTab] = useState(0)
  const navigate = useNavigate()
  const { pageLoading } = useOutletContext()
  const panels = [<General key="g" />, <ConnectedApps key="c" />]

  return (
    <div>
      <div className="flex items-center gap-2 px-4 pt-5 pb-2">
        <button onClick={() => navigate(-1)} className="text-app-muted text-xl bg-transparent border-none cursor-pointer">
          ‹
        </button>
        <div className="text-[22px] font-semibold">User Preferences</div>
      </div>
      <Tabs tabs={['General', 'Connected apps']} active={tab} onChange={setTab} />
      {pageLoading ? <PageSkeleton tiles={[{ lines: 3 }, { lines: 2 }]} /> : panels[tab]}
    </div>
  )
}
