export default function EmptyState({ icon, title, subtitle, linkText, linkStyle = 'text' }) {
  if (linkStyle === 'button') {
    return (
      <div className="text-center text-app-muted">
        <div className="pt-6 pb-4 px-4">
          <div className="flex items-center justify-center mb-3">{icon}</div>
          <h4 className="text-app-text text-[15px] mb-1">{title}</h4>
          {subtitle && <p className="text-[13px]">{subtitle}</p>}
        </div>
        {linkText && (
          <>
            <div className="-mx-4 border-t border-app-border" />
            <div className="py-3">
              <a href="#" className="inline-flex items-center gap-1.5 text-brand text-sm font-medium no-underline">
                {linkText}
              </a>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="text-center py-6 px-4 text-app-muted">
      <div className="flex items-center justify-center mb-3">{icon}</div>
      <h4 className="text-app-text text-[15px] mb-1">{title}</h4>
      {subtitle && <p className="text-[13px] mb-2">{subtitle}</p>}
      {linkText && (
        <a href="#" className="inline-flex items-center gap-1.5 text-brand text-sm no-underline">
          {linkText}
        </a>
      )}
    </div>
  )
}
