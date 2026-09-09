import FormulaCard from './FormulaCard.jsx'

export default function ExampleCard({ title, items = [] }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-3">{title}</h3>}
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((it, i) => (
          <FormulaCard key={i} title={it.label} equation={it.equation} />
        ))}
      </div>
    </div>
  )
}
