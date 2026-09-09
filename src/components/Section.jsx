import { useState } from 'react'
import InfoCard from './InfoCard.jsx'
import KeyPointCard from './KeyPointCard.jsx'
import TipCard from './TipCard.jsx'
import ExampleCard from './ExampleCard.jsx'
import FormulaCard from './FormulaCard.jsx'
import InteractivePeriodicTable from './InteractivePeriodicTable.jsx'
import OrbitalDiagram from './OrbitalDiagram.jsx'
import FillingOrderPath from './FillingOrderPath.jsx'
import ElectronConfigurationBuilder from './ElectronConfigurationBuilder.jsx'
import BookmarkButton from './BookmarkButton.jsx'
import { Beaker, FlaskConical } from 'lucide-react'

function Wrapper({ id, lessonId, lessonTitle, title, bookmarkable, snippet, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      {bookmarkable && (
        <div className="flex justify-end mb-2">
          <BookmarkButton id={id} lessonId={lessonId} lessonTitle={lessonTitle} title={title} snippet={snippet} />
        </div>
      )}
      {children}
    </section>
  )
}

function TwoLists({ title, lists }) {
  return (
    <InfoCard title={title}>
      <div className="grid sm:grid-cols-2 gap-4 not-italic">
        {lists.map((l, i) => (
          <div key={i}>
            <p className="font-semibold text-navy-900 mb-2 text-sm">{l.title}</p>
            <ul className="space-y-1.5 text-sm">
              {l.items.map((it, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-500 mt-2 shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </InfoCard>
  )
}

function FamiliesReveal({ title, trigger, families }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-3">{title}</h3>}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-center bg-gradient-to-l from-royal-500 to-royal-600 text-white font-semibold py-3 rounded-xl hover:opacity-95 transition-opacity"
      >
        {trigger} {open ? '▲' : '▼'}
      </button>
      {open && (
        <div className="grid sm:grid-cols-2 gap-3 mt-4 animate-slideUp">
          {families.map((f) => (
            <div key={f.id} className="bg-sky-100/50 border border-sky-200 rounded-xl p-3">
              <p className="font-bold text-navy-900 text-sm">{f.label}</p>
              <p className="text-xs text-navy-700/70 mt-0.5">{f.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ShellTable({ title, rows }) {
  return (
    <InfoCard title={title}>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.n} className="flex items-center gap-3 bg-sky-100/40 rounded-xl p-3">
            <span dir="ltr" className="font-bold text-royal-600 w-16 shrink-0">{r.n}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-navy-900">{r.label}</p>
              <p dir="ltr" className="text-xs text-navy-700/70 mt-0.5">{r.sublevels.join(' , ')}</p>
            </div>
          </div>
        ))}
      </div>
    </InfoCard>
  )
}

function InfoGrid({ title, items }) {
  return (
    <InfoCard title={title}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((it, i) => (
          <div key={i} className="bg-sky-100/50 rounded-xl p-3 text-center">
            {it.label && <p dir="ltr" className="font-bold text-royal-600">{it.label}</p>}
            <p className="text-xs text-navy-800 mt-1">{it.value}</p>
          </div>
        ))}
      </div>
    </InfoCard>
  )
}

function DataTable({ title, columns, rows }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 overflow-x-auto animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-3">{title}</h3>}
      <table className="w-full text-sm min-w-[420px]">
        <thead>
          <tr className="bg-navy-900 text-white">
            {columns.map((c, i) => (
              <th key={i} className="py-2 px-3 font-medium first:rounded-r-lg last:rounded-l-lg">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 ? 'bg-sky-100/40' : 'bg-white'}>
              {row.map((cell, j) => (
                <td key={j} dir="ltr" className="py-2 px-3 text-center text-navy-800">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ReactionGroup({ title, groups }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 space-y-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900">{title}</h3>}
      {groups.map((g, i) => (
        <div key={i}>
          <p className="text-sm font-semibold text-royal-600 mb-2 flex items-center gap-1.5">
            <FlaskConical size={15} /> {g.label}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {g.reactions.map((r, j) => (
              <FormulaCard key={j} title={r.label} equation={r.equation} />
            ))}
          </div>
          {g.note && <p className="text-xs text-navy-700/60 mt-2">{g.note}</p>}
        </div>
      ))}
    </div>
  )
}

function FlameColors({ title, items }) {
  const [active, setActive] = useState(null)
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4">{title}</h3>}
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((it, i) => (
          <button key={i} onClick={() => setActive(i)} className="flex flex-col items-center gap-2 group">
            <span
              className="w-14 h-20 rounded-t-full block transition-transform group-active:scale-95"
              style={{
                background: `linear-gradient(to top, ${it.hex}, ${active === i ? it.hex : '#fbbf24'}55)`,
                boxShadow: active === i ? `0 0 24px 4px ${it.hex}88` : 'none',
              }}
            />
            <span dir="ltr" className="font-bold text-navy-900 text-sm">{it.symbol}</span>
            <span className="text-xs text-navy-700/60">{it.name}</span>
          </button>
        ))}
      </div>
      {active !== null && (
        <p className="text-center text-sm mt-4 text-navy-800">
          لون لهب <span className="font-bold" dir="ltr">{items[active].symbol}</span>: <span className="font-bold">{items[active].color}</span>
        </p>
      )}
    </div>
  )
}

function StateStrip({ title, items }) {
  const labels = { gas: 'غاز', liquid: 'سائل', solid: 'صلب' }
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4">{title}</h3>}
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((it, i) => (
          <div key={i} className="flex flex-col items-center gap-2 w-20">
            <span
              className="w-14 h-14 rounded-xl border-2 border-navy-700/20 flex items-center justify-center font-bold text-navy-900"
              style={{ background: it.hex, color: it.state === 'solid' ? '#fff' : '#0B1734' }}
              dir="ltr"
            >
              {it.symbol}
            </span>
            <span className="text-xs text-navy-800">{it.name}</span>
            <span className="text-[10px] bg-sky-100 text-royal-600 px-2 py-0.5 rounded-full">{labels[it.state]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function HalogenLab({ title, note }) {
  const halides = ['KBr', 'KI']
  const halogens = ['F₂', 'Cl₂', 'Br₂', 'I₂']
  // ترتيب الفاعلية من المصدر: F > Cl > Br > I
  const reactivityOrder = ['F₂', 'Cl₂', 'Br₂', 'I₂']
  const [halogen, setHalogen] = useState(halogens[1])
  const [halide, setHalide] = useState(halides[0])

  const halogenRank = reactivityOrder.indexOf(halogen)
  const halideHalogen = halide === 'KBr' ? 'Br₂' : 'I₂'
  const halideRank = reactivityOrder.indexOf(halideHalogen)
  const willDisplace = halogenRank < halideRank

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-1">{title}</h3>}
      {note && <p className="text-xs text-navy-700/60 mb-4">{note}</p>}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-navy-700/60 mb-1.5">اختر هالوجينًا</p>
          <div className="flex gap-2 flex-wrap">
            {halogens.map((h) => (
              <button
                key={h}
                dir="ltr"
                onClick={() => setHalogen(h)}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-colors ${
                  halogen === h ? 'bg-royal-500 text-white border-royal-500' : 'border-sky-200 text-navy-800'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-navy-700/60 mb-1.5">اختر محلول هاليد</p>
          <div className="flex gap-2 flex-wrap">
            {halides.map((h) => (
              <button
                key={h}
                dir="ltr"
                onClick={() => setHalide(h)}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-colors ${
                  halide === h ? 'bg-royal-500 text-white border-royal-500' : 'border-sky-200 text-navy-800'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`rounded-xl p-4 text-center text-sm font-medium transition-colors ${
          halogenRank === halideRank
            ? 'bg-sky-100 text-navy-700'
            : willDisplace
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-amber-50 text-amber-700 border border-amber-200'
        }`}
      >
        {halogenRank === halideRank
          ? 'اخترت الهالوجين نفسه الموجود في المحلول.'
          : willDisplace
          ? `${halogen} أكثر فاعلية من ${halideHalogen}، لذلك يزيحه من المحلول.`
          : `${halogen} أقل فاعلية من ${halideHalogen}، لذلك لا يحدث إزاحة.`}
      </div>
      <p className="text-[11px] text-navy-700/50 mt-3 text-center">ترتيب الفاعلية: F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂</p>
    </div>
  )
}

function NobleShell({ title }) {
  const gases = [
    { symbol: 'He', shells: [2] },
    { symbol: 'Ne', shells: [2, 8] },
    { symbol: 'Ar', shells: [2, 8, 8] },
  ]
  const [active, setActive] = useState(0)
  const g = gases[active]
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4 text-center">{title}</h3>}
      <div className="flex justify-center gap-2 mb-5">
        {gases.map((gg, i) => (
          <button
            key={gg.symbol}
            dir="ltr"
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-colors ${
              active === i ? 'bg-royal-500 text-white border-royal-500' : 'border-sky-200 text-navy-800'
            }`}
          >
            {gg.symbol}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
          <span className="absolute w-8 h-8 rounded-full bg-royal-600 text-white flex items-center justify-center text-xs font-bold z-10" dir="ltr">
            {g.symbol}
          </span>
          {g.shells.map((count, ringIdx) => {
            const size = 60 + ringIdx * 50
            return (
              <span
                key={ringIdx}
                className="absolute rounded-full border-2 border-sky-300"
                style={{ width: size, height: size }}
              />
            )
          })}
        </div>
      </div>
      <p className="text-center text-xs text-navy-700/60 mt-4">
        الأغلفة: <span dir="ltr" className="font-semibold">{g.shells.join(', ')}</span> — غلاف خارجي مكتمل ⇒ ثبات وخمول كيميائي
      </p>
    </div>
  )
}

function BoilingTimeline({ title, items }) {
  const min = Math.min(...items.map((i) => i.boiling))
  const max = Math.max(...items.map((i) => i.boiling))
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4">{title}</h3>}
      <div className="space-y-3">
        {items.map((it, i) => {
          const pct = ((it.boiling - min) / (max - min)) * 100
          return (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="w-24 shrink-0 text-navy-800">{it.name}</span>
              <div className="flex-1 bg-sky-100 rounded-full h-3 relative overflow-hidden">
                <div
                  className="bg-gradient-to-l from-royal-400 to-royal-600 h-full rounded-full transition-all"
                  style={{ width: `${Math.max(pct, 6)}%` }}
                />
              </div>
              <span dir="ltr" className="w-16 text-left text-xs font-semibold text-navy-700">{it.boiling}°C</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function UsesCards({ title, items }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4">{title}</h3>}
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((it, i) => (
          <div key={i} className="bg-sky-100/50 border border-sky-200 rounded-xl p-3 hover:border-royal-400 transition-colors">
            <p className="font-semibold text-navy-900 text-sm flex items-center gap-1.5">
              <Beaker size={14} className="text-royal-600" /> {it.title}
            </p>
            <p className="text-xs text-navy-700/70 mt-1 leading-6">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ColorCompounds({ title, note, items }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-1">{title}</h3>}
      {note && <p className="text-xs text-navy-700/60 mb-4">{note}</p>}
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3 bg-sky-100/40 rounded-xl p-3">
            <span className="w-8 h-8 rounded-full shrink-0 border border-navy-700/10" style={{ background: it.hex }} />
            <div>
              <p className="text-sm font-medium text-navy-900">{it.label}</p>
              <p className="text-xs text-navy-700/60">{it.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CompareColumns({ title, columns }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4">{title}</h3>}
      <div className="grid sm:grid-cols-2 gap-4">
        {columns.map((col, i) => (
          <div key={i} className={`rounded-xl p-4 ${i === 0 ? 'bg-royal-50 border border-royal-100' : 'bg-sky-100/40 border border-sky-200'}`}>
            <p className="font-bold text-navy-900 mb-2 text-sm">{col.title}</p>
            <ul className="space-y-1.5 text-xs text-navy-800">
              {col.items.map((it, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-500 mt-1.5 shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function MetalGradient({ title }) {
  const els = ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar']
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4">{title}</h3>}
      <div className="flex rounded-xl overflow-hidden h-16" dir="ltr">
        {els.map((el, i) => (
          <div
            key={el}
            className="flex-1 flex items-center justify-center text-xs font-bold text-white"
            style={{ background: `linear-gradient(90deg, #1E40AF, #93C5FD)`, opacity: 1 - i * 0.09 }}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[11px] text-navy-700/60 mt-2">
        <span>فلزات</span>
        <span>أشباه فلزات</span>
        <span>لافلزات</span>
      </div>
    </div>
  )
}

function IonCompare({ title, pairs, note }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4">{title}</h3>}
      <div className="grid sm:grid-cols-2 gap-4">
        {pairs.map((p, i) => (
          <div key={i} className="flex items-center justify-around bg-sky-100/40 rounded-xl p-4 gap-2">
            <div className="text-center">
              <p dir="ltr" className="font-bold text-lg text-navy-900">{p.atom.symbol}</p>
              <p className="text-[11px] text-navy-700/60">ذرة متعادلة</p>
              <p className="text-[11px] text-navy-700/60">إلكترونات: {p.atom.electrons}</p>
            </div>
            <span className="text-royal-500 font-bold">→</span>
            <div className="text-center">
              <p dir="ltr" className="font-bold text-lg text-royal-600">{p.ion.symbol}</p>
              <p className="text-[11px] text-navy-700/60">إلكترونات: {p.ion.electrons}</p>
              <p dir="ltr" className="text-[11px] text-navy-700/60">{p.ion.config}</p>
            </div>
          </div>
        ))}
      </div>
      {note && <p className="text-xs text-navy-700/60 mt-3 text-center">{note}</p>}
    </div>
  )
}

function FormulaSimilarity({ title, note, groups }) {
  const [active, setActive] = useState(0)
  const g = groups[active]
  const fields = [
    ['oxide', 'أكسيد'], ['hydroxide', 'هيدروكسيد'], ['nitrate', 'نترات'],
    ['sulfate', 'كبريتات'], ['carbonate', 'كربونات'], ['chloride', 'كلوريد'],
  ]
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 overflow-x-auto animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-1">{title}</h3>}
      {note && <p className="text-xs text-navy-700/60 mb-4">{note}</p>}
      <div className="flex gap-2 mb-4">
        {groups.map((gr, i) => (
          <button
            key={gr.group}
            onClick={() => setActive(i)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-colors ${
              active === i ? 'bg-royal-500 text-white border-royal-500' : 'border-sky-200 text-navy-800'
            }`}
          >
            المجموعة {gr.group}
          </button>
        ))}
      </div>
      <table className="w-full text-xs min-w-[500px]">
        <thead>
          <tr className="bg-navy-900 text-white">
            <th className="py-2 px-2">العنصر</th>
            {fields.map(([k, label]) => <th key={k} className="py-2 px-2">{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {g.rows.map((row, i) => (
            <tr key={i} className={i % 2 ? 'bg-sky-100/40' : 'bg-white'}>
              <td dir="ltr" className="py-2 px-2 text-center font-bold text-royal-600">{row.element}</td>
              {fields.map(([k]) => (
                <td key={k} dir="ltr" className="py-2 px-2 text-center text-navy-800">{row[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Section({ section, lessonId, lessonTitle }) {
  const { type, id } = section
  const snippet = Array.isArray(section.body) ? section.body[0] : section.body

  let content = null
  switch (type) {
    case 'text':
      content = (
        <InfoCard title={section.title}>
          {section.body.map((p, i) => <p key={i}>{p}</p>)}
        </InfoCard>
      )
      break
    case 'twoLists':
      content = <TwoLists title={section.title} lists={section.lists} />
      break
    case 'keyPoint':
      content = <KeyPointCard title={section.title} body={section.body} />
      break
    case 'tip':
      content = <TipCard title={section.title} body={section.body} />
      break
    case 'familiesReveal':
      content = <FamiliesReveal title={section.title} trigger={section.trigger} families={section.families} />
      break
    case 'elementTable':
      content = <InteractivePeriodicTable title={section.title} note={section.note} elements={section.elements} />
      break
    case 'shellTable':
      content = <ShellTable title={section.title} rows={section.rows} />
      break
    case 'infoGrid':
      content = <InfoGrid title={section.title} items={section.items} />
      break
    case 'orbitalDiagram':
      content = <OrbitalDiagram title={section.title} mode={section.mode} />
      break
    case 'fillingOrderPath':
      content = <FillingOrderPath title={section.title} note={section.note} order={section.order} />
      break
    case 'example':
      content = <ExampleCard title={section.title} items={section.items} />
      break
    case 'ionCompare':
      content = <IonCompare title={section.title} pairs={section.pairs} note={section.note} />
      break
    case 'configBuilder':
      content = (
        <div>
          {section.title && <h3 className="font-bold text-navy-900 mb-3">{section.title}</h3>}
          <ElectronConfigurationBuilder />
        </div>
      )
      break
    case 'compareColumns':
      content = <CompareColumns title={section.title} columns={section.columns} />
      break
    case 'metalGradient':
      content = <MetalGradient title={section.title} />
      break
    case 'dataTable':
      content = <DataTable title={section.title} columns={section.columns} rows={section.rows} />
      break
    case 'reactionGroup':
      content = <ReactionGroup title={section.title} groups={section.groups} />
      break
    case 'flameColors':
      content = <FlameColors title={section.title} items={section.items} />
      break
    case 'stateStrip':
      content = <StateStrip title={section.title} items={section.items} />
      break
    case 'halogenLab':
      content = <HalogenLab title={section.title} note={section.note} />
      break
    case 'nobleShell':
      content = <NobleShell title={section.title} />
      break
    case 'boilingTimeline':
      content = <BoilingTimeline title={section.title} items={section.items} />
      break
    case 'usesCards':
      content = <UsesCards title={section.title} items={section.items} />
      break
    case 'colorCompounds':
      content = <ColorCompounds title={section.title} note={section.note} items={section.items} />
      break
    case 'formulaSimilarity':
      content = <FormulaSimilarity title={section.title} note={section.note} groups={section.groups} />
      break
    default:
      content = null
  }

  const bookmarkable = type === 'keyPoint' || type === 'tip'

  return (
    <Wrapper
      id={id}
      lessonId={lessonId}
      lessonTitle={lessonTitle}
      title={section.title}
      bookmarkable={bookmarkable}
      snippet={snippet}
    >
      {content}
    </Wrapper>
  )
}
