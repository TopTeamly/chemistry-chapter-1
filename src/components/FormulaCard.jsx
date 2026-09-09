export default function FormulaCard({ title, equation, note }) {
  return (
    <div className="bg-navy-900 text-white rounded-2xl p-5 shadow-soft animate-fadeIn">
      {title && <p className="text-xs text-sky-200 mb-2">{title}</p>}
      <p dir="ltr" className="text-lg sm:text-xl font-semibold tracking-wide text-center py-1">
        {equation}
      </p>
      {note && <p className="text-xs text-sky-100/70 mt-2 text-center">{note}</p>}
    </div>
  )
}
