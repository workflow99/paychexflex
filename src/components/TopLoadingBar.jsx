export default function TopLoadingBar() {
  return (
    <div className="h-[3px] w-full bg-[#cfe0f5] overflow-hidden relative">
      <div className="loading-bar-fill absolute inset-y-0 bg-brand" />
    </div>
  )
}
