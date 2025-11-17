import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const brand = {
  name: 'AB FINANZEN',
  colors: {
    bg: '#0b0b0d',
    surface: '#0f1013',
    soft: '#1a1b1f',
    text: '#e6e7eb',
    sub: '#a8acb3',
  },
}

export default function HeroIntro({ lang = 'de' }) {
  const [mount3D, setMount3D] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const shouldMount = !mq.matches
    if (shouldMount) {
      const id = setTimeout(() => setMount3D(true), 250)
      return () => clearTimeout(id)
    }
  }, [])

  const T = {
    de: {
      badge: 'MÜNCHEN • FINANZIERUNG',
      h1: 'Präzise Finanzierung für komplexe Entscheidungen.',
      sub: `${brand.name} liefert verlässliche, individuelle Strategien – klar, transparent und langfristig ausgerichtet.`,
      cta: 'Beratung starten',
      approach: 'Unser Ansatz',
    },
    en: {
      badge: 'MUNICH • FINANCE',
      h1: 'Precision financing for complex decisions.',
      sub: `${brand.name} delivers reliable, individualized strategies with absolute clarity, transparency, and long‑term alignment.`,
      cta: 'Start your consultation',
      approach: 'Our approach',
    },
  }[lang]

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" style={{ backgroundColor: brand.colors.bg }}>
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" aria-hidden>
        <div className="absolute inset-y-0 left-1/4 w-px bg-white/5" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/5" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-white/5" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 md:grid-cols-2 lg:gap-16">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest text-white/70">
              {T.badge}
              <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              {T.h1}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {T.sub}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#consult" className="group relative inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-black focus:outline-none" style={{ backgroundColor: 'var(--gold)' }}>
                <span className="relative z-10">{T.cta}</span>
                <span className="absolute inset-0 rounded-md ring-1 ring-black/5" />
                <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: `0 0 0 0 rgba(200,169,106,0), 0 0 24px 4px rgba(200,169,106,var(--gold-glow))` }} />
              </a>
              <button className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white/90 transition-colors" aria-label="View methodology">
                {T.approach}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[52vh] w-full md:h-[70vh]">
          <div className="absolute inset-0 rounded-xl border border-white/5 bg-white/0">
            {mount3D ? (
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-white/40">3D preview</div>
            )}
          </div>
          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] opacity-60 blur-3xl" style={{ background: 'radial-gradient(60%_60%_at_70%_30%, rgba(200,169,106,0.08), transparent 60%)' }} />
        </div>
      </div>
    </section>
  )
}
