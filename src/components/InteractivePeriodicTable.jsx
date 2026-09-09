import InteractiveElement from './InteractiveElement.jsx'

// جدول تفاعلي بسيط لعرض عناصر (مثل عناصر الدورة الثالثة) - اضغط أي عنصر لرؤية معلوماته
export default function InteractivePeriodicTable({ title, note, elements = [] }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-1">{title}</h3>}
      {note && <p className="text-xs text-navy-700/60 mb-4">{note}</p>}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2">
        {elements.map((el) => (
          <InteractiveElement
            key={el.symbol}
            symbol={el.symbol}
            name={el.name}
            meta={[
              { label: 'العدد الذري', value: el.atomicNumber },
              { label: 'التوزيع الإلكتروني', value: el.config },
            ]}
          />
        ))}
      </div>
    </div>
  )
}
