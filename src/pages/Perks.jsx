import { useOutletContext } from 'react-router-dom'
import Tile from '../components/Tile.jsx'
import { perks } from '../data/mockData.js'
import { IconExternalLink } from '../components/icons.jsx'
import PageSkeleton from '../components/SkeletonTile.jsx'
import heroBg from '../assets/perk-hero-bg.jpeg'
import benefitsmeLogo from '../assets/perk-benefitsme-logo.png'
import perpayLogo from '../assets/perk-perpay-logo.png'
import goskillsLogo from '../assets/perk-goskills-logo.png'
import allstateLogo from '../assets/perk-allstate-logo.png'
import marketplaceIcon from '../assets/perk-marketplace-icon.png'
import discountsIcon from '../assets/perk-discounts-icon.png'
import financialWellnessIcon from '../assets/perk-financial-wellness-icon.png'
import paycheckPayIcon from '../assets/perk-paycheck-pay-icon.png'

const logos = {
  benefitsme: benefitsmeLogo,
  perpay: perpayLogo,
  goskills: goskillsLogo,
  allstate: allstateLogo,
}

const icons = {
  marketplace: marketplaceIcon,
  discounts: discountsIcon,
  'financial-wellness': financialWellnessIcon,
  paycheckPay: paycheckPayIcon,
}

export default function Perks() {
  const { pageLoading } = useOutletContext()

  return (
    <div>
      <div
        className="text-white px-4 py-8 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h2 className="text-[22px] font-medium">My Perks</h2>
        <p className="text-sm opacity-90 mt-1">Extra services provided through your employer.</p>
      </div>
      {pageLoading && <PageSkeleton tiles={[{ lines: 3 }, { lines: 3 }, { lines: 3 }]} />}
      {!pageLoading && (
        <div>
          {perks.map((perk) => (
            <Tile key={perk.name}>
              {perk.logo && (
                <div className="flex justify-center py-4">
                  <img src={logos[perk.logo]} alt="" className="h-[108px] object-contain" />
                </div>
              )}
              {perk.icon && (
                <div className="flex justify-center py-2">
                  <img src={icons[perk.icon]} alt="" className="w-[288px] h-[288px] object-contain" />
                </div>
              )}
              <h4 className="text-base font-semibold mt-2">{perk.title}</h4>
              {perk.poweredBy && (
                <p className="text-[13px] text-app-muted mt-1">
                  powered by <span className="font-semibold text-app-text">{perk.poweredBy}</span>
                </p>
              )}
              {perk.subtitle && <p className="text-[13px] text-app-muted mt-2">{perk.subtitle}</p>}
              <p className="text-[13px] text-app-muted mt-2 mb-3">
                {perk.desc}
                {perk.descFootnote && <sup>{perk.descFootnote}</sup>}
              </p>
              {perk.learnMoreText && (
                <a href="#" className="inline-flex items-center gap-1.5 text-brand text-[13px] font-medium mb-3">
                  {perk.learnMoreText} <IconExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-brand rounded text-[13px] no-underline text-brand font-medium"
                >
                  {perk.ctaText} <IconExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Tile>
          ))}
          <div className="text-center py-6">
            <a href="#" className="text-brand text-sm no-underline">
              Manage Preferences
            </a>
          </div>
          <p className="text-[11px] text-app-muted leading-relaxed px-4 pb-6">
            1. The Paychex Pay Deposit Account is established by Central Bank of Kansas City, Member FDIC. The
            Paychex Pay Debit Mastercard is issued by Central Bank of Kansas City pursuant to a license by
            Mastercard International Incorporated. Mastercard is a registered trademark, and the circles design is
            a trademark of Mastercard International Incorporated. Certain fees, terms, and conditions are
            associated with the approval, maintenance, and use of the Deposit Account and Card. If you have any
            questions regarding your Deposit Account or Card, you should consult your{' '}
            <a href="#" className="text-brand">
              Deposit Account Agreement
            </a>{' '}
            and{' '}
            <a href="#" className="text-brand">
              Fee Schedule
            </a>{' '}
            or contact us toll-free 24/7/365 at 1-866-438-0579.
          </p>
        </div>
      )}
    </div>
  )
}
