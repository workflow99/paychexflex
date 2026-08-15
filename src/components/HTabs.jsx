import { useEffect, useRef, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from './icons.jsx'

export default function HTabs({ tabs, active, onChange }) {
  const scrollerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateArrows = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }



  useEffect(() => {
    updateArrows()
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows)
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [tabs])

  const scrollBy = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className="relative flex items-center bg-app-card border-b border-app-border">
      {canScrollLeft && (
        <button
          onClick={() => scrollBy(-120)}
          className="shrink-0 px-1.5 h-full flex items-center justify-center bg-app-card text-app-muted cursor-pointer"
        >
          <IconChevronLeft className="w-4 h-4" />
        </button>
      )}
      <div
        ref={scrollerRef}
        className="flex gap-5.5 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => onChange(i)}
            className={`whitespace-nowrap py-3.5 px-0.5 text-sm font-medium cursor-pointer border-b-2 -mb-px ${
              active === i ? 'text-brand border-brand' : 'text-app-muted border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={() => scrollBy(120)}
          className="shrink-0 px-1.5 h-full flex items-center justify-center bg-app-card text-app-muted cursor-pointer"
        >
          <IconChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
