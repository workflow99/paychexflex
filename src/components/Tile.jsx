export default function Tile({ children, className = '' }) {
  return (
    <div className={`bg-app-card border border-app-border rounded-lg mx-4 my-3 p-4 ${className}`}>
      {children}
    </div>
  )
}
