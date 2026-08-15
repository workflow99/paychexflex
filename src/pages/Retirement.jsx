import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import HTabs from '../components/HTabs.jsx'
import Tile from '../components/Tile.jsx'
import Row from '../components/Row.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'
import {
  IconWallet,
  IconHouse,
  IconUser,
  IconBell,
  IconRocket,
  IconBarChart,
  IconInfo,
  IconWarning,
  IconChevronRight,
  IconChevronLeft,
  IconExternalLink,
  IconFilter,
  IconActivity,
  IconCoins,
  IconHeadset,
  IconSwap,
  IconChat,
  IconPlus,
} from '../components/icons.jsx'
import { retirement, employee } from '../data/mockData.js'
import { useRetirementData, formatCurrency, getMonthToDateRange } from '../context/RetirementDataContext.jsx'
import iraPromoIcon from '../assets/rollover-icon-placeholder.png'
import rolloverOutIcon from '../assets/rollover-out.png'
import rolloverSplitIcon from '../assets/rollover-split.png'
import headsetIcon from '../assets/rollover-headset.png'
import withdrawalIcon from '../assets/rollover-withdrawal.png'
import specialWithdrawalIcon from '../assets/rollover-special-withdrawal.png'
import rolloverIntoIcon from '../assets/rollover-into.png'
import historyIcon from '../assets/rollover-history.png'
import annuitiesIcon from '../assets/rollover-annuities.png'

const rolloverActionIcons = [rolloverOutIcon, rolloverSplitIcon, withdrawalIcon, specialWithdrawalIcon]

function Donut({ size = 200, radius = 82, strokeWidth = 18, dasharray, dashoffset = 0, big, small, emphasizeSmall = false }) {
  const c = size / 2
  return (
    <div className="mx-auto my-4 relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={c} cy={c} r={radius} fill="none" stroke="#e0e0e0" strokeWidth={strokeWidth} />
        <circle
          cx={c}
          cy={c}
          r={radius}
          fill="none"
          stroke="#5c6bc0"
          strokeWidth={strokeWidth}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className={emphasizeSmall ? 'text-xs text-app-muted' : 'text-lg font-bold'}>{big}</div>
        <div className={emphasizeSmall ? 'text-lg font-bold text-app-text mt-0.5' : 'text-xs text-app-muted'}>{small}</div>
      </div>
    </div>
  )
}

function MultiDonut({ size = 200, radius = 82, strokeWidth = 18, segments, big, small }) {
  const c = size / 2
  const circumference = 2 * Math.PI * radius
  let cumulative = 0
  return (
    <div className="mx-auto my-4 relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={c} cy={c} r={radius} fill="none" stroke="#e0e0e0" strokeWidth={strokeWidth} />
        {segments.map((seg) => {
          const length = (seg.pct / 100) * circumference
          const dashoffset = -cumulative
          cumulative += length
          return (
            <circle
              key={seg.label}
              cx={c}
              cy={c}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={dashoffset}
            />
          )
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-lg font-bold">{big}</div>
        <div className="text-xs text-app-muted">{small}</div>
      </div>
    </div>
  )
}

function RadialProgress({ size = 150, radius = 66, strokeWidth = 7, pct, big, small }) {
  const c = size / 2
  const circumference = 2 * Math.PI * radius
  const length = (pct / 100) * circumference
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={c} cy={c} r={radius} fill="none" stroke="#e5e5e5" strokeWidth={strokeWidth} />
        <circle
          cx={c}
          cy={c}
          r={radius}
          fill="none"
          stroke="#c9622c"
          strokeWidth={strokeWidth}
          strokeDasharray={`${length} ${circumference - length}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
        <div className="text-base font-bold leading-tight">{big}</div>
        <div className="text-[11px] text-app-muted leading-tight">{small}</div>
      </div>
    </div>
  )
}

function IconBadge({ Icon, bg, color, size = 'w-10 h-10', iconSize = 'w-5 h-5' }) {
  return (
    <div className={`${size} rounded-full flex items-center justify-center shrink-0`} style={{ background: bg, color }}>
      <Icon className={iconSize} />
    </div>
  )
}

function Summary({ onGoToContributions }) {
  const [returnTab, setReturnTab] = useState(0)
  const { balance } = useRetirementData()

  return (
    <div>
      <Tile className="!mx-4">
        <div className="font-normal mb-4">Your retirement at a glance</div>
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-sm text-app-muted mb-1">Current balance</div>
            <div className="text-xl font-bold">{formatCurrency(balance)}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-app-muted mb-1 underline decoration-dotted decoration-app-muted underline-offset-2">
              Vested balance
            </div>
            <div className="text-xl font-bold">{formatCurrency(balance)}</div>
          </div>
        </div>
        <div className="border-t border-app-border pt-4 flex items-center justify-between gap-4">
          <div>
            <div className="font-semibold mb-1">Income projection</div>
            <div className="text-xs text-app-muted mb-2">Per month</div>
            <div className="text-[13px]">
              You'd need: <span className="font-semibold">{retirement.incomeProjection.needed}</span>
            </div>
            <div className="text-[13px]">
              You'd have: <span className="font-semibold">{retirement.incomeProjection.have}</span>
            </div>
          </div>
          <RadialProgress
            pct={retirement.incomeProjection.shortPct}
            big={retirement.incomeProjection.shortAmount}
            small="short of goal"
          />
        </div>
        <button className="px-4 py-1.5 border border-app-border bg-app-card text-brand font-medium rounded text-[13px] cursor-pointer mt-4">
          Calculate
        </button>
      </Tile>

      <div className="bg-app-bg px-4 py-4 mx-4 mb-4 mt-2">
        <div className="font-semibold mb-0.5">{retirement.annuitiesPromo.title}</div>
        <div className="flex items-end justify-between gap-2">
          <div className="text-[13px] text-app-muted">{retirement.annuitiesPromo.subtitle}</div>
          <a href="#" className="inline-flex items-center gap-1 text-brand text-sm font-medium shrink-0 whitespace-nowrap">
            {retirement.annuitiesPromo.linkText} <IconExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <Tile>
        <div className="font-semibold pb-3">Yearly rate of return</div>
        <div className="-mx-4 border-b border-app-border" />
        <div className="flex text-sm -mx-4 mb-3">
          {retirement.yearlyReturn.asOf.map((a, i) => (
            <button
              key={a}
              onClick={() => setReturnTab(i)}
              className={`flex-1 text-center py-3 border-b-2 cursor-pointer bg-transparent ${
                returnTab === i ? 'text-brand border-brand font-medium' : 'text-app-muted border-transparent'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
        <div className="text-sm text-app-muted mb-2">{retirement.yearlyReturn.period}</div>
        <div className="text-center">
          <div className="text-[#d32f2f] text-[32px] font-bold inline-block border-b border-dotted border-[#d32f2f] pb-0.5">
            {retirement.yearlyReturn.value}
          </div>
        </div>
      </Tile>

      <Tile>
        <div className="font-semibold pb-3">Contributions</div>
        <div className="-mx-4 border-b border-app-border" />
        <Donut
          size={180}
          radius={74}
          strokeWidth={8}
          dasharray={465}
          dashoffset={0}
          big="Total"
          small={formatCurrency(balance)}
          emphasizeSmall
        />
        <div className="-mx-4 border-b border-app-border" />
        <Row
          label={
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5c6bc0] shrink-0" />
              From you
            </span>
          }
        >
          <span className="font-semibold">{formatCurrency(balance)}</span>
        </Row>
        <Row label="Last contribution" last>
          <span className="font-semibold">
            {retirement.contributionsPreview.lastContribution.amount}
            <br />
            <span className="text-[13px] text-app-muted font-normal">
              {retirement.contributionsPreview.lastContribution.date}
            </span>
          </span>
        </Row>
        <div className="-mx-4 border-b border-app-border" />
        <button
          onClick={onGoToContributions}
          className="w-full text-center pt-3 text-brand text-sm font-medium bg-transparent border-none cursor-pointer"
        >
          Go to Contributions
        </button>
      </Tile>

      <Tile>
        <div className="font-semibold mb-2.5">Beneficiaries</div>
        <div className="text-center py-4">
          <div className="relative w-16 h-16 mx-auto mb-3">
            <div className="w-16 h-16 rounded-full bg-app-bg flex items-center justify-center">
              <IconUser className="w-7 h-7 text-app-muted" />
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-app-muted text-white flex items-center justify-center">
              <IconPlus className="w-3 h-3" strokeWidth={3} />
            </div>
          </div>
          <p className="font-medium mb-2">You currently have no beneficiaries</p>
          <p className="text-[13px] text-app-muted max-w-xs mx-auto">{retirement.beneficiaries.desc}</p>
          <button className="mt-3 px-4 py-2 border border-app-border text-app-text bg-app-card rounded text-[13px] cursor-pointer">
            Add beneficiaries
          </button>
        </div>
      </Tile>

      <Tile className="flex items-center gap-3">
        <IconBadge Icon={IconActivity} bg="#e3f2fd" color="#1565c0" />
        <div className="flex-1">
          <div className="font-semibold">{retirement.accountActivity.title}</div>
          <div className="text-[13px] text-app-muted">{retirement.accountActivity.desc}</div>
        </div>
        <IconChevronRight className="w-5 h-5 text-app-muted shrink-0" />
      </Tile>

      <Tile className="flex items-start gap-3">
        <IconBadge Icon={IconCoins} bg="#fff3e0" color="#ef6c00" />
        <div>
          <div className="font-semibold mb-1">{retirement.feeDisclosure.title}</div>
          <p className="text-[13px] text-app-muted mb-2">{retirement.feeDisclosure.desc}</p>
          <a href="#" className="text-brand text-sm font-medium">
            {retirement.feeDisclosure.linkText}
          </a>
        </div>
      </Tile>

      <Tile>
        <p className="text-[13px] text-app-muted leading-relaxed">
          <span className="font-bold text-app-text">IMPORTANT:</span> {retirement.importantNotice.text}{' '}
          <a href="#" className="text-brand">
            {retirement.importantNotice.linkText}
          </a>
        </p>
      </Tile>
    </div>
  )
}

function Contributions() {
  const { contributions } = retirement
  const { balance } = useRetirementData()
  return (
    <div>
      <Tile>
        <div className="font-semibold">Your plan contributions</div>
        <div className="text-[13px] text-app-muted mb-2">as of Today</div>
        <div className="-mx-4 border-b border-app-border" />
        <Donut
          size={180}
          radius={74}
          strokeWidth={8}
          dasharray={465}
          dashoffset={70}
          big={formatCurrency(balance)}
          small="Current Value"
        />
        {contributions.breakdown.map((b, i) => (
          <div
            key={b.label}
            className={`flex items-center gap-2 py-2.5 text-sm ${
              i < contributions.breakdown.length - 1 ? 'border-b border-app-border' : ''
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: b.color }} />
            <span className="flex-1">
              {b.label} - <span className="font-medium">{b.amount}</span>
            </span>
            <IconInfo className="w-4 h-4 text-app-muted shrink-0" />
            <span className="font-medium w-14 text-right shrink-0">{b.pct}</span>
          </div>
        ))}
      </Tile>

      <Tile>
        <div className="flex justify-between items-center pb-3">
          <span className="font-semibold">Contributions</span>
          <button className="px-4 py-1.5 border border-app-border bg-app-card rounded text-[13px] cursor-pointer text-app-text">
            Edit
          </button>
        </div>
        <div className="-mx-4 border-b border-app-border" />
        <div className="py-3">
          <a href="#" className="text-brand font-semibold block mb-1">
            {contributions.promo.title}
          </a>
          <p className="text-app-text mb-1">{contributions.promo.desc}</p>
          <a href="#" className="text-brand text-sm">
            {contributions.promo.linkText}
          </a>
        </div>
        {contributions.perPayPeriod.map((p, i) => (
          <Row key={p.label} label={p.label} last={i === contributions.perPayPeriod.length - 1}>
            <span className={p.bold ? 'font-semibold' : ''}>{p.value}</span>
          </Row>
        ))}
        <p className="text-[13px] text-app-muted mt-3">{contributions.catchupNote}</p>
      </Tile>

      <Tile className="!p-0 overflow-hidden">
        <div className="flex items-stretch">
          <div className="flex items-center justify-center px-4 py-4 border-r border-app-border">
            <IconRocket className="w-8 h-8 text-[#f9a825]" />
          </div>
          <div className="flex items-center px-4 py-4">
            <div>
              <div className="font-semibold">Auto Increase</div>
              <div className="text-brand text-sm mt-0.5 cursor-pointer">Auto Increase Preferences</div>
            </div>
          </div>
        </div>
      </Tile>

      <Tile className="!p-0 overflow-hidden">
        <div className="flex items-stretch">
          <div className="flex items-center justify-center px-4 py-4 border-r border-app-border">
            <IconBarChart className="w-8 h-8 text-[#1565c0]" />
          </div>
          <div className="flex items-center px-4 py-4">
            <div className="font-semibold">Roth analysis tool</div>
          </div>
        </div>
      </Tile>
    </div>
  )
}

function Investments() {
  const { investments } = retirement
  const { balance } = useRetirementData()
  return (
    <div className="p-4">
      <div className="font-semibold">Investment insights</div>
      <div className="text-[13px] text-app-muted mb-3">{investments.asOf}</div>
      <button className="px-4 py-1.5 bg-brand text-white border-none rounded text-[13px] cursor-pointer">
        Performance
      </button>
      <MultiDonut segments={investments.allocation} big={formatCurrency(balance)} small="Current value" />
      <div className="font-semibold mb-1">Asset Allocation</div>
      {investments.allocation.map((a, i) => (
        <div
          key={a.label}
          className={`flex items-center gap-2 py-2.5 text-sm ${
            i < investments.allocation.length - 1 ? 'border-b border-app-border' : ''
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: a.color }} />
          <span className="flex-1">{a.label}</span>
          <IconInfo className="w-4 h-4 text-app-muted" />
          <span className="font-medium w-14 text-right">{a.pct}%</span>
        </div>
      ))}

      <div className="flex justify-between items-center mt-5 mb-2.5">
        <span className="font-semibold">Investments</span>
        <button className="px-4 py-1.5 border border-app-border bg-app-card rounded text-[13px] cursor-pointer text-app-text">
          Manage
        </button>
      </div>
      {investments.holdings.map((h, i) => (
        <div key={h.name} className={`py-3 ${i < investments.holdings.length - 1 ? 'border-b border-app-border' : ''}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3f51b5] shrink-0" />
            <a href="#" className="text-brand font-medium">
              {h.name}
            </a>
          </div>
          <div className="text-[13px] text-app-muted mb-1">YTD Change</div>
          <Row label="Future contributions" last>
            {h.futureContrib}
          </Row>
          <Row label="Current investments" last>
            {h.currentPct}
          </Row>
          <Row label="Value" last>
            <span className="font-semibold">{h.value}</span>
          </Row>
        </div>
      ))}
      <div className="text-center pt-3">
        <a href="#" className="text-brand text-sm font-medium">
          View All Investments
        </a>
      </div>

      <Tile className="!mx-0 text-center">
        <div className="font-bold text-lg mb-3">GuidedChoice</div>
        <div className="font-semibold mb-1">{investments.guidedChoice.title}</div>
        <p className="text-[13px] text-app-muted mb-2">{investments.guidedChoice.desc}</p>
        <a href="#" className="text-brand text-sm font-medium">
          {investments.guidedChoice.linkText}
        </a>
      </Tile>

      <Tile className="!mx-0">
        <div className="flex items-center gap-3 pb-3">
          <IconSwap className="w-5 h-5 text-[#00897b] shrink-0" />
          <div className="font-semibold">{investments.autoRebalance.title}</div>
        </div>
        <div className="-mx-4 border-b border-app-border" />
        <div className="text-center py-6">
          <div className="w-20 h-20 rounded-full bg-app-bg flex items-center justify-center mx-auto mb-3">
            <IconActivity className="w-8 h-8 text-app-muted" />
          </div>
          <p className="font-medium mb-1">{investments.autoRebalance.status}</p>
          <p className="text-[13px] text-app-muted mb-3">{investments.autoRebalance.desc}</p>
          <button className="px-4 py-2 bg-brand text-white border-none rounded text-sm font-medium cursor-pointer">
            {investments.autoRebalance.buttonText}
          </button>
        </div>
      </Tile>

      <Tile className="!mx-0">
        <div className="flex items-center gap-3 pb-3">
          <IconHeadset className="w-5 h-5 text-brand shrink-0" />
          <div className="font-semibold">{investments.advisor.title}</div>
        </div>
        <div className="-mx-4 border-b border-app-border" />
        <div className="pt-3">
          <div className="text-[11px] uppercase text-app-muted font-bold tracking-wide mb-1">
            {investments.advisor.specialistLabel}
          </div>
          <div className="font-semibold mb-1">{investments.advisor.name}</div>
          <a href="#" className="text-brand text-sm block mb-0.5">
            {investments.advisor.phone}
          </a>
          <a href="#" className="text-brand text-sm block">
            {investments.advisor.email}
          </a>
        </div>
      </Tile>
    </div>
  )
}

function Loans() {
  const { loans } = retirement
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="p-4">
      <div className="font-semibold mb-1">Borrow from your 401(k)</div>
      <div className="text-[13px] text-app-muted mb-4">{loans.intro}</div>
      <button className="px-4 py-2 bg-brand text-white border-none rounded text-sm font-medium cursor-pointer mb-2">
        Request a loan
      </button>
      {loans.options.map((opt) => (
        <Tile key={opt.name} className="!mx-0 text-center">
          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#fdf1e0] flex items-center justify-center">
            {opt.illustration === 'wallet' ? (
              <IconWallet className="w-9 h-9 text-[#c98a1f]" />
            ) : (
              <IconHouse className="w-9 h-9 text-[#c98a1f]" />
            )}
          </div>
          <div className="font-semibold mb-2">{opt.name}</div>
          <ul className="text-[13px] text-app-muted text-left inline-block space-y-1 list-disc pl-4">
            {opt.terms.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Tile>
      ))}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-2 text-sm text-app-text bg-transparent border-none cursor-pointer py-3 text-left"
      >
        <IconChevronRight className={`w-4 h-4 shrink-0 transition-transform ${expanded ? 'rotate-90' : ''}`} />
        Learn more about taking a 401(k) loan
      </button>
      {expanded && (
        <p className="text-[13px] text-app-muted pb-3">
          A 401(k) loan lets you borrow from your own retirement savings and repay yourself, with interest, through
          payroll deduction.
        </p>
      )}
      <div className="text-center pt-2 pb-2">
        <a href="#" className="text-brand text-sm font-medium">
          Estimate payment
        </a>
      </div>
    </div>
  )
}

function RolloverWithdrawal({ onOpenWithdrawal }) {
  const [iraPromoDismissed, setIraPromoDismissed] = useState(false)
  const { rolloverWithdrawal: rw } = retirement
  const { manualHistoryEntries } = useRetirementData()
  const historyEntries = [...manualHistoryEntries, ...rw.history.entries]

  return (
    <div className="p-4">
      <Tile className="!mx-0 overflow-hidden">
        <div className="pb-4">
          <div className="font-semibold mb-1">{rw.moveMyMoney.title}</div>
          <p className="text-[13px] text-app-muted">{rw.moveMyMoney.desc}</p>
        </div>

        {!iraPromoDismissed && (
          <div className="flex items-center gap-3 bg-app-bg -mx-4 px-4 py-3">
            <img src={iraPromoIcon} alt="" className="w-[88px] h-[88px] object-contain shrink-0" />
            <div className="flex-1">
              <div className="text-sm">{rw.iraPromo.title}</div>
              <a href="#" className="text-brand text-sm font-medium">
                {rw.iraPromo.linkText}
              </a>
            </div>
            <button
              aria-label="Dismiss"
              onClick={() => setIraPromoDismissed(true)}
              className="bg-transparent border-none cursor-pointer text-app-muted shrink-0"
            >
              ✕
            </button>
          </div>
        )}

        {rw.actions.map((a, i) => (
          <div key={a.title} className="flex items-start gap-3 py-4 -mx-4 px-4 border-t border-app-border">
            <img src={rolloverActionIcons[i]} alt="" className="w-28 h-28 object-contain shrink-0" />
            <div className="flex-1">
              <div className="font-semibold mb-1">{a.title}</div>
              <p className="text-[13px] text-app-muted">{a.desc}</p>
              {a.cta === 'chat' && (
                <a href="#" className="inline-flex items-center gap-1.5 text-brand text-sm font-medium mt-2">
                  <img src={headsetIcon} alt="" className="w-4 h-4 object-contain" />
                  {a.linkText}
                </a>
              )}
            </div>
            {a.cta === 'chevron' && <IconChevronRight className="w-5 h-5 text-app-muted shrink-0 mt-1" />}
          </div>
        ))}

        <div className="pt-4 -mx-4 px-4 border-t border-app-border">
          <div className="font-semibold mb-3">{rw.moveIntoPlan.title}</div>
          <div className="flex items-start gap-3">
            <img src={rolloverIntoIcon} alt="" className="w-28 h-28 object-contain shrink-0" />
            <div>
              <div className="font-semibold mb-1">{rw.moveIntoPlan.rolloverTitle}</div>
              <p className="text-[13px] text-app-muted mb-2">{rw.moveIntoPlan.rolloverDesc}</p>
              <a href="#" className="text-brand text-sm font-medium">
                {rw.moveIntoPlan.linkText}
              </a>
            </div>
          </div>
        </div>
      </Tile>

      <Tile className="!mx-0">
        <div className="flex items-center gap-3 pb-3">
          <img src={historyIcon} alt="" className="w-8 h-8 object-contain shrink-0" />
          <div>
            <div className="font-semibold">{rw.history.title}</div>
            <div className="text-[13px] text-app-muted">{rw.history.desc}</div>
          </div>
        </div>
        <div className="-mx-4 border-b border-app-border" />
        {historyEntries.map((e, i) => {
          const clickable = Boolean(e.detail)
          return (
            <div
              key={i}
              onClick={clickable ? () => onOpenWithdrawal(e) : undefined}
              className={`pt-3 ${clickable ? 'cursor-pointer' : ''}`}
            >
              <div className="text-[13px] text-app-muted mb-1">{e.date}</div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{e.type}</span>
                <span className="flex items-center gap-1.5 text-[13px] text-[#2e7d32]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32]" />
                  {e.status}
                </span>
              </div>
              <div className="text-[13px] text-app-muted">{e.sub}</div>
            </div>
          )
        })}
      </Tile>

      <Tile className="!mx-0 flex items-start gap-3">
        <img src={annuitiesIcon} alt="" className="w-20 h-20 object-contain shrink-0" />
        <div>
          <div className="font-semibold mb-1">{rw.annuitiesPromo.title}</div>
          <p className="text-[13px] text-app-muted mb-2">{rw.annuitiesPromo.desc}</p>
          <a href="#" className="inline-flex items-center gap-1.5 text-brand text-sm font-medium">
            {rw.annuitiesPromo.linkText} <IconExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </Tile>
    </div>
  )
}

function StatementHistory() {
  const { statementHistory } = retirement
  const { balance, manualTransactions } = useRetirementData()
  const [filterActive, setFilterActive] = useState(false)
  const [contribExpanded, setContribExpanded] = useState(false)
  const [otherExpanded, setOtherExpanded] = useState(false)
  const [page, setPage] = useState(0)
  const totalPages = statementHistory.transactionPages.length
  const transactions =
    page === 0
      ? [...manualTransactions, ...statementHistory.transactionPages[0]]
      : statementHistory.transactionPages[page]

  return (
    <div className="p-4">
      <Tile className="!mx-0">
        <div className="font-semibold mb-3">Overview</div>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilterActive((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 border rounded text-[13px] cursor-pointer ${
              filterActive ? 'border-brand text-brand' : 'border-app-border text-app-text'
            }`}
          >
            <IconFilter className="w-3.5 h-3.5" />
            Filters
          </button>
          <button className="px-3 py-1.5 border border-app-border rounded text-[13px] cursor-pointer text-app-text">
            Statements
          </button>
        </div>
        <div className="text-[13px] text-app-muted mb-1">{statementHistory.period}</div>
        <div className="text-sm mb-3">{getMonthToDateRange()}</div>
        <Row label="Starting balance" last>
          <span className="font-semibold">{statementHistory.startingBalance}</span>
        </Row>
        <button
          onClick={() => setContribExpanded((v) => !v)}
          className="w-full flex items-center gap-2 py-3 text-sm bg-transparent border-none cursor-pointer text-left border-t border-app-border"
        >
          <IconChevronRight className={`w-4 h-4 shrink-0 transition-transform ${contribExpanded ? 'rotate-90' : ''}`} />
          Total contributions: {statementHistory.totalContributions}
        </button>
        <button
          onClick={() => setOtherExpanded((v) => !v)}
          className="w-full flex items-center gap-2 py-3 text-sm bg-transparent border-none cursor-pointer text-left border-t border-app-border"
        >
          <IconChevronRight className={`w-4 h-4 shrink-0 transition-transform ${otherExpanded ? 'rotate-90' : ''}`} />
          {statementHistory.otherDetailsLabel}
        </button>
        <Row label="Ending balance" className="border-t border-app-border" last>
          <span className="font-semibold">{formatCurrency(balance)}</span>
        </Row>
      </Tile>

      <Tile className="!mx-0">
        <div className="flex justify-between items-center pb-3">
          <span className="font-semibold">Transactions</span>
          <button className="px-4 py-1.5 border border-app-border bg-app-card rounded text-[13px] cursor-pointer text-app-text">
            Download
          </button>
        </div>
        <div className="-mx-4 border-b border-app-border" />
        {transactions.map((t, i) => (
          <div key={i} className={`py-3 ${i < transactions.length - 1 ? 'border-b border-app-border' : ''}`}>
            <div className="text-[13px] text-app-muted mb-1">{t.date}</div>
            <div className="font-semibold mb-0.5">{t.type}</div>
            <div className="text-[13px] text-app-muted mb-2">{t.fund}</div>
            <Row label="Price" last>
              {t.price}
            </Row>
            <Row label="Shares" last>
              {t.shares}
            </Row>
            <Row label="Amount" last>
              <span className="font-semibold">{t.amount}</span>
            </Row>
          </div>
        ))}
      </Tile>

      <div className="flex items-center justify-center gap-4 pt-2">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label="Previous page"
          className="bg-transparent border-none cursor-pointer text-app-muted disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <IconChevronLeft className="w-4 h-4" />
        </button>
        {statementHistory.transactionPages.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Page ${i + 1}`}
            className={`text-sm px-1 pb-0.5 bg-transparent border-none cursor-pointer border-b-2 ${
              page === i ? 'text-brand border-brand font-medium' : 'text-app-muted border-transparent'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          aria-label="Next page"
          className="bg-transparent border-none cursor-pointer text-app-muted disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <IconChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function WithdrawalDetail({ entry, onBack }) {
  const d = entry.detail
  const groups = [
    [
      { label: 'Confirmation number', value: d.confirmationNumber },
      { label: 'Withdrawal type', value: d.withdrawalType },
    ],
    [{ label: 'Tax documents', value: d.taxDocuments }],
    [
      { label: 'Payment date', value: d.paymentDate },
      { label: 'Payment method', value: d.paymentMethod },
      {
        label: 'Payable to',
        value: (
          <>
            {employee.legalFirstName} {employee.legalLastName}
            <br />
            {employee.address[0]}
            <br />
            {employee.address[1]}
          </>
        ),
      },
    ],
    [
      { label: 'Gross amount', value: d.grossAmount },
      { label: 'Taxable amount', value: d.taxableAmount },
      { label: 'Net amount', value: d.netAmount },
    ],
    [
      { label: 'Federal taxes withheld', value: d.federalTaxWithheld },
      { label: d.stateTaxLabel, value: d.stateTaxWithheld },
      { label: 'Fees', value: d.fees },
    ],
  ]

  return (
    <div>
      <div className="px-4 pt-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1 text-brand text-sm font-medium bg-transparent border-none cursor-pointer p-0"
        >
          <IconChevronLeft className="w-4 h-4" />
          Rollover &amp; withdrawal
        </button>
      </div>
      <div className="px-4 pt-4 pb-2">
        <div className="text-[19px] font-semibold">{entry.type}</div>
        <div className="text-app-muted text-sm mt-1">{entry.date}</div>
      </div>
      <div className="p-4 pt-2">
        <Tile className="!mx-0 !p-0 overflow-hidden">
          <div className="font-semibold text-sm px-4 py-3.5 border-b border-app-border">Details</div>
          {groups.map((group, gi) => (
            <div
              key={gi}
              className={`px-4 py-3.5 ${gi < groups.length - 1 ? 'border-b border-app-border' : ''}`}
            >
              {group.map((row) => (
                <div key={row.label} className="flex justify-between items-start gap-4 text-[13px] py-1">
                  <span className="text-app-muted">{row.label}</span>
                  <span className="text-right">{row.value}</span>
                </div>
              ))}
            </div>
          ))}
        </Tile>
      </div>
    </div>
  )
}

const tabLabels = ['Summary', 'Contributions', 'Investments', 'Loans', 'Rollover & withdrawal', 'Statement history']

export default function Retirement() {
  const [tab, setTab] = useState(0)
  const [withdrawalDetail, setWithdrawalDetail] = useState(null)
  const { pageLoading } = useOutletContext()
  const panels = [
    <Summary key="s" onGoToContributions={() => setTab(1)} />,
    <Contributions key="c" />,
    <Investments key="i" />,
    <Loans key="l" />,
    <RolloverWithdrawal key="rw" onOpenWithdrawal={setWithdrawalDetail} />,
    <StatementHistory key="sh" />,
  ]

  if (withdrawalDetail) {
    return <WithdrawalDetail entry={withdrawalDetail} onBack={() => setWithdrawalDetail(null)} />
  }

  return (
    <div>
      <div className="p-4 bg-app-card">
        <div className="text-[17px] font-semibold">{retirement.planName}</div>
      </div>
      <HTabs tabs={tabLabels} active={tab} onChange={setTab} />
      {pageLoading ? (
        <PageSkeleton tiles={[{ lines: 3 }, { lines: 4 }, { lines: 3 }]} />
      ) : (
        panels[tab]
      )}
    </div>
  )
}
