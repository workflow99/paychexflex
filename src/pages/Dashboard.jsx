import { useNavigate, useOutletContext } from 'react-router-dom'
import Tile from '../components/Tile.jsx'
import EmptyState from '../components/EmptyState.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'
import {
  IconCheck,
  IconDoc,
  IconCalendar,
  IconDotsVertical,
  IconEyeSlash,
  IconAward,
  IconCake,
  IconChat,
  IconExternalLink,
} from '../components/icons.jsx'
import PdfFileIcon from '../components/PdfFileIcon.jsx'
import { dashboardTiles } from '../data/mockData.js'
import retirementPiggybank from '../assets/retirement-piggybank.png'
import trainingIconSmall from '../assets/training-icon-small.png'
import trainingIconBlue from '../assets/training-icon-blue.png'
import trainingBooksIllustration from '../assets/training-books-illustration.png'
import taxdocsIcon from '../assets/taxdocs-icon.png'
import taskImg from '../assets/taskimg.png'

function Badge({ children, bg, color, size = 'sm', shape = 'circle' }) {
  const dims = size === 'sm' ? 'w-9 h-9' : 'w-20 h-20'
  const iconDims = size === 'sm' ? 'w-5 h-5' : 'w-9 h-9'
  const shapeClass = shape === 'square' ? 'rounded-lg' : 'rounded-full'
  return (
    <div className={`${dims} ${shapeClass} flex items-center justify-center shrink-0`} style={{ background: bg, color }}>
      {children({ className: iconDims })}
    </div>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const { pageLoading } = useOutletContext()

  return (
    <div>
      <div className="flex justify-between items-end px-4 pt-5 pb-2">
        <div className="text-[22px] font-semibold">Dashboard</div>
        <div className="text-brand text-sm font-normal cursor-pointer">Manage Tiles</div>
      </div>

      {pageLoading ? (
        <PageSkeleton
          tiles={[
            { lines: 3 },
            { lines: 3 },
            { lines: 4 },
            { lines: 3 },
            { lines: 3 },
          ]}
        />
      ) : (
      <div>
        <Tile className="!p-0 overflow-hidden">
          <div className="flex items-stretch">
            <div className="flex items-center justify-center px-4 py-4 border-r border-app-border">
              <img src={retirementPiggybank} alt="" className="w-9 h-9 shrink-0" />
            </div>
            <div className="flex items-center px-4 py-4">
              <div>
                <div className="font-semibold text-base">{dashboardTiles.retirement.title}</div>
                <button
                  onClick={() => navigate('/retirement')}
                  className="text-brand text-sm mt-0.5 cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  {dashboardTiles.retirement.sub}
                </button>
              </div>
            </div>
          </div>
        </Tile>

        <Tile>
          <div className="flex items-center gap-3 pb-3">
            <img src={trainingIconSmall} alt="" className="w-9 h-9 shrink-0" />
            <div className="font-semibold text-base">Training</div>
          </div>
          <div className="-mx-4 border-b border-app-border" />
          <EmptyState
            icon={<img src={trainingBooksIllustration} alt="" className="w-24 h-24 object-contain" />}
            title="Nothing to show here"
            subtitle="No courses are currently assigned to you."
            linkText={
              <>
                View in Paychex Flex Learning <IconExternalLink className="w-3.5 h-3.5" />
              </>
            }
            linkStyle="button"
          />
        </Tile>

        <Tile>
          <div className="flex items-center gap-3 pb-3">
            <div className="w-9 h-9 rounded bg-[#e3f2fd] text-[#1565c0] flex items-center justify-center shrink-0">
              <IconCalendar className="w-5 h-5" />
            </div>
            <div className="font-semibold text-base flex-1">Check stubs timeline</div>
            <IconDotsVertical className="w-5 h-5 text-app-text cursor-pointer shrink-0" />
          </div>
          <div className="-mx-4 border-b border-app-border" />
          <div className="-mx-4">
            {dashboardTiles.checkStubs.map((stub) => (
              <div
                key={stub.date}
                className="flex justify-between items-center py-3 px-4 text-[15px] border-b border-app-border"
              >
                <span className="underline decoration-1 underline-offset-2">{stub.date}</span>
                <span className="flex items-center gap-2 text-app-muted">
                  <span className="tracking-widest">•••••</span>
                  <IconEyeSlash className="w-4 h-4 text-brand" />
                </span>
              </div>
            ))}
          </div>
          <div className="text-center pt-3 text-brand text-sm">View all check stubs</div>
        </Tile>

        <Tile className="!p-0 overflow-hidden">
          <div className="flex items-stretch">
            <div className="flex items-center justify-center px-4 py-4 border-r border-app-border">
              <img src={trainingIconBlue} alt="" className="w-9 h-9 shrink-0" />
            </div>
            <div className="flex items-center px-4 py-4">
              <div>
                <div className="font-semibold text-base">Training</div>
                <div className="text-brand text-sm mt-0.5 cursor-pointer inline-flex items-center gap-1.5">
                  Take me there <IconExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </Tile>

        <Tile>
          <div className="flex items-center gap-3 pb-3">
            <img src={taxdocsIcon} alt="" className="w-9 h-9 shrink-0" />
            <div className="font-semibold text-base">Tax Documents</div>
          </div>
          <div className="-mx-4 border-b border-app-border" />
          <div className="py-6 text-center">
            {dashboardTiles.taxDocuments.map((doc) => (
              <div key={doc.label}>
                <PdfFileIcon className="w-10 h-10 mx-auto mb-2" />
                <div className="text-[15px]">{doc.label}</div>
              </div>
            ))}
          </div>
          <div className="-mx-4 border-b border-app-border" />
          <div className="text-center pt-3 text-brand text-sm">View All</div>
        </Tile>

        <Tile>
          <div className="flex items-center gap-3 pb-3">
            <div className="w-9 h-9 rounded-md border-2 border-[#8bc994] bg-[#eefbf0] text-[#2e7d32] flex items-center justify-center shrink-0">
              <IconCheck className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <div className="font-semibold text-base">Tasks</div>
          </div>
          <div className="-mx-4 border-b border-app-border" />
          <EmptyState
            icon={<img src={taskImg} alt="" className="w-24 h-24 rounded-full object-cover mx-auto" />}
            title="Relax, no new tasks."
            linkText="View All"
            linkStyle="button"
          />
        </Tile>

        <Tile>
          <div className="flex justify-between items-center pb-3">
            <span className="font-semibold text-base">Goals</span>
            <span className="text-brand text-sm font-medium cursor-pointer">+ Add</span>
          </div>
          <div className="-mx-4 border-b border-app-border" />
          <EmptyState
            icon={
              <Badge bg="#eef1f5" color="#9aa5b1" size="lg">
                {(p) => <IconDoc {...p} />}
              </Badge>
            }
            title="No goals added yet"
            linkText="Add a goal"
          />
        </Tile>

        <Tile>
          <div className="font-semibold text-base mb-2">Upcoming Events</div>
          {dashboardTiles.events.map((ev) => (
            <div key={ev.label} className="flex gap-3 py-2.5 items-center">
              <div className="w-9 text-center text-[11px] font-bold uppercase leading-tight whitespace-pre-line">
                {ev.date}
              </div>
              {ev.type === 'anniversary' ? (
                <IconAward className="w-4.5 h-4.5 text-[#f9a825] shrink-0" />
              ) : (
                <IconCake className="w-4.5 h-4.5 text-[#ec407a] shrink-0" />
              )}
              <div className="text-[15px]">{ev.label}</div>
            </div>
          ))}
        </Tile>

        <Tile>
          <div className="flex justify-between items-center pb-3">
            <span className="font-semibold text-base">Conversations</span>
            <span className="text-brand text-sm font-medium cursor-pointer">+ Add</span>
          </div>
          <div className="-mx-4 border-b border-app-border" />
          <EmptyState
            icon={
              <Badge bg="#eef1f5" color="#9aa5b1" size="lg">
                {(p) => <IconChat {...p} />}
              </Badge>
            }
            title="You don't have any notes yet"
            linkText="Get Started"
          />
        </Tile>
      </div>
      )}
    </div>
  )
}
