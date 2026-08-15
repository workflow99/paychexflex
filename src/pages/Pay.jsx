import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import HTabs from '../components/HTabs.jsx'
import Tile from '../components/Tile.jsx'
import Row from '../components/Row.jsx'
import { pay } from '../data/mockData.js'
import { IconInfo, IconExternalLink, IconPlus } from '../components/icons.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'

function Compensation() {
  const { rate } = pay
  return (
    <div className="p-4">
      <div className="font-semibold mb-3.5 text-base">Compensation</div>
      <div className="mb-4">
        <span className="font-semibold">{rate.label}</span>
        {rate.isDefault && (
          <span className="inline-block px-2.5 py-0.5 border border-app-border rounded-full text-xs text-app-muted ml-2 align-middle">
            Default
          </span>
        )}
      </div>
      <Row label="Rate"><span className="font-semibold">{rate.hourly}</span></Row>
      <Row label="Standard Pay Period">{rate.standardPayPeriod}</Row>
      <Row label="Standard Overtime" last>{rate.standardOvertime}</Row>
      <div className="font-semibold my-6 mb-3 text-base">Pay Details</div>
      <Row label="Pay Frequency" last>{rate.payFrequency}</Row>
      <div className="font-semibold my-6 mb-3 text-base">Calculated Standard Rate</div>
      <Row label="Hourly Rate"><span className="font-semibold">{rate.calculatedHourlyRate}</span></Row>
      <Row label="Per Pay Period">{rate.perPayPeriod}</Row>
      <Row label="Annualized" last>{rate.annualized}</Row>
      <div className="font-semibold my-6 mb-3 text-base">Review</div>
      <Row label="Next Review" last>{rate.nextReview}</Row>
    </div>
  )
}

function PayHistory() {
  return (
    <div className="p-4">
      <div className="font-semibold mb-2">Pay History</div>
      {pay.history.map((h) => (
        <div key={h.date} className="p-4 border-b border-app-border -mx-4 first:pt-0 cursor-pointer">
          <div className="text-sm text-app-muted mb-1 px-4">{h.date}</div>
          <div className="text-base font-semibold flex items-center gap-2 flex-wrap px-4">
            {h.label}{' '}
            {h.badge ? (
              <span className="inline-block px-2.5 py-0.5 border border-app-border rounded-full text-xs text-app-muted">
                {h.badge}
              </span>
            ) : (
              <span className="text-[13px] text-app-muted font-normal">Rate - ({h.rate})</span>
            )}
          </div>
          {h.badge && (
            <>
              <div className="text-[13px] text-app-muted mt-1 px-4">Rate - ({h.rate})</div>
              <div className="text-[13px] text-app-muted mt-2.5 px-4">
                Pay Details
                <br />
                Pay Frequency
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

function EarningsDeductions() {
  const [dismissed, setDismissed] = useState(false)

  return (
    <div className="p-4">
      {!dismissed && (
        <div className="bg-[#eef2f7] border-l-4 border-brand rounded p-3 mb-4 text-[13px] text-app-text flex gap-2 leading-snug">
          <IconInfo className="w-4.5 h-4.5 shrink-0 text-brand" />
          <span className="flex-1">
            <span className="font-bold">No mystery here.</span> Earnings and deductions are recurring items on
            paychecks. In general, earnings add to pay, deductions reduce it and informational items have no
            effect.
          </span>
          <button
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
            className="text-app-text bg-transparent border-none cursor-pointer shrink-0 leading-none"
          >
            ✕
          </button>
        </div>
      )}
      <div className="font-semibold mb-2.5">Earnings</div>
      {pay.earnings.map((e) => (
        <Tile key={e.code} className="!my-0 mb-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium text-app-text">{e.code}</div>
              <div className="text-[13px] text-app-muted">{e.period}</div>
            </div>
            <div className="text-right">
              {e.value}
              <br />
              <span className="text-[13px] text-app-muted">{e.sub}</span>
            </div>
          </div>
        </Tile>
      ))}
      <div className="font-semibold mt-5 mb-2.5">Deductions</div>
      {pay.deductions.map((d) => (
        <Tile key={d.code} className="!my-0 mb-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium text-app-text">{d.code}</div>
              <div className="text-[13px] text-app-muted">{d.period}</div>
            </div>
            <span className="font-semibold">{d.amount}</span>
          </div>
        </Tile>
      ))}
    </div>
  )
}

function DirectDeposit() {
  const { directDeposit } = pay
  return (
    <div className="p-4">
      <Tile className="!my-0 mb-5">
        <h4 className="mb-2 text-lg font-normal">Paychex Flex Pay&reg;</h4>
        <p className="text-[13px] text-app-muted mb-3">
          an online account established by Central Bank of Kansas City, Member FDIC
        </p>
        <p className="text-[13px] text-app-muted mb-4">
          Get a debit Mastercard&reg; and open an optional Savings Account.<sup>1</sup>
        </p>
        <div className="text-center">
          <button className="inline-flex items-center gap-1.5 px-4 py-2 border border-brand text-brand bg-app-card rounded text-sm font-medium cursor-pointer">
            Get more info <IconExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </Tile>
      <Tile className="!my-0 mb-3">
        <div className="flex justify-between items-center pb-3">
          <span className="font-semibold">Direct deposit accounts</span>
          <button className="px-4 py-1.5 border border-app-border bg-app-card rounded text-[13px] cursor-pointer text-app-text">
            Edit
          </button>
        </div>
        <div className="-mx-4 border-b border-app-border mb-3" />
        <div className="font-semibold mb-2">{directDeposit.bankName}</div>
        <Row label="Account Type" className="text-[13px]" last>
          <span className="text-sm">{directDeposit.accountType}</span>
        </Row>
        <Row label="Routing Number" className="text-[13px]" last>
          <span className="text-sm">{directDeposit.routingNumber}</span>
        </Row>
        <Row label="Account Number" className="text-[13px]" last>
          <span className="text-sm">{directDeposit.accountNumber}</span>
        </Row>
        <Row label="Used For" className="text-[13px]" last>
          <span className="text-sm">{directDeposit.usedFor}</span>
        </Row>
        <Row label="Amount" className="text-[13px]" last>
          <span className="text-sm">{directDeposit.amount}</span>
        </Row>
        <div className="-mx-4 border-b border-app-border mt-1" />
        <div className="flex items-center justify-center gap-1.5 text-brand text-sm font-medium pt-4">
          <IconPlus className="w-4 h-4" strokeWidth={2.25} />
          Add bank account
        </div>
      </Tile>
      <p className="text-[11px] text-app-muted leading-relaxed mt-5">
        1. The Paychex Flex Pay Deposit Account is established by Central Bank of Kansas City, Member FDIC. The
        Paychex Flex Pay Debit Mastercard is issued by Central Bank of Kansas City pursuant to a license by Mastercard
        International Incorporated. Mastercard is a registered trademark, and the circles design is a trademark
        of Mastercard International Incorporated. Certain fees, terms, and conditions are associated with the
        approval, maintenance, and use of the Deposit Account and Card. If you have any questions regarding your
        Deposit Account or Card, you should consult your{' '}
        <a href="#" className="text-brand">
          Deposit Account Agreement
        </a>{' '}
        and{' '}
        <a href="#" className="text-brand">
          Fee Schedule
        </a>
        .
      </p>
    </div>
  )
}

function Taxes() {
  const { taxes } = pay
  return (
    <div className="p-4">
      <Tile className="!my-0 mb-4">
        <div className="font-semibold pb-3">Federal</div>
        <div className="-mx-4 border-b border-app-border" />
        <div className="flex justify-between items-center pt-3">
          <div>
            <div className="font-medium">{taxes.federal.label}</div>
            <div className="text-[13px] text-app-muted">{taxes.federal.sub}</div>
          </div>
          <span className="text-app-text text-xl">›</span>
        </div>
      </Tile>
      <Tile className="!my-0">
        <div className="font-semibold pb-3">State</div>
        <div className="-mx-4 border-b border-app-border" />
        {taxes.state.map((s, i) => (
          <div key={s.label}>
            <div className="flex justify-between items-center py-3">
              <div>
                <div className="font-medium">{s.label}</div>
                <div className="text-[13px] text-app-muted">{s.sub}</div>
              </div>
              <span className="text-app-text text-xl">›</span>
            </div>
            {i < taxes.state.length - 1 && <div className="-mx-4 border-b border-app-border" />}
          </div>
        ))}
      </Tile>
    </div>
  )
}

const tabLabels = ['Compensation', 'Pay History', 'Earnings & Deductions', 'Direct Deposit', 'Taxes']

export default function Pay() {
  const [tab, setTab] = useState(0)
  const { pageLoading } = useOutletContext()
  const panels = [<Compensation key="c" />, <PayHistory key="h" />, <EarningsDeductions key="ed" />, <DirectDeposit key="dd" />, <Taxes key="t" />]

  return (
    <div>
      <div className="text-[22px] font-semibold px-4 pt-5 pb-2">My Pay</div>
      <HTabs tabs={tabLabels} active={tab} onChange={setTab} />
      {pageLoading ? <PageSkeleton tiles={[{ lines: 3 }, { lines: 4 }, { lines: 2 }]} /> : panels[tab]}
    </div>
  )
}
