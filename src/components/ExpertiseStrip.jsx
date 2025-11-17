import { useEffect, useRef } from 'react'

const items = 'Finanzierung • Kapitalaufbau • Vermögensstruktur • Risikoanalyse • Immobilienfinanzierung • Unternehmensberatung'.split(' • ')

export default function ExpertiseStrip() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf
    const speed = 30 // px/sec
    const step = (t) => {
      if (!start) start = t
      const dt = (t - start) / 1000
      start = t
      el.scrollLeft += speed * dt
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollLeft = 0
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative w-full bg-[#0b0b0d] py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div ref={ref} className="no-scrollbar relative overflow-x-auto whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.02] py-5" style={{ scrollBehavior: 'auto' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-6 inline-block text-sm tracking-wider text-white/70">
              {items.join(' • ')}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
