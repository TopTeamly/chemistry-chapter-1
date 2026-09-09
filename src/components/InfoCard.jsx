export default function InfoCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-2">{title}</h3>}
      <div className="text-[15px] leading-8 text-navy-800/90 space-y-2">{children}</div>
    </div>
  )
}
