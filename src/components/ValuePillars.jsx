import { motion } from 'framer-motion'
import { Shield, LineChart, UserCheck, Scale, Layers, Target } from 'lucide-react'

const content = {
  de: [
    { icon: Shield, title: 'Stabilität', text: 'Kapitalschutz und diszipliniertes Risikomanagement auf Basis von Daten.' },
    { icon: LineChart, title: 'Performance', text: 'Strukturiertes Wachstum durch Szenarioplanung und klare Allokation.' },
    { icon: UserCheck, title: 'Individualität', text: 'Strategien, die zu Ihrem Kontext passen – keine Schablonen.' },
    { icon: Scale, title: 'Transparenz', text: 'Klarheit über Kosten, Mechanik und Entscheidungswege.' },
    { icon: Layers, title: 'Struktur', text: 'Robuste Portfoliostruktur mit sauberer Governance.' },
    { icon: Target, title: 'Langfristig', text: 'Vorsprünge durch disziplinierte, kontinuierliche Umsetzung.' },
  ],
  en: [
    { icon: Shield, title: 'Stability', text: 'Capital protection and risk discipline grounded in data.' },
    { icon: LineChart, title: 'Performance', text: 'Structured growth engineered with scenario planning.' },
    { icon: UserCheck, title: 'Individualized', text: 'Strategies calibrated to your context, not templates.' },
    { icon: Scale, title: 'Transparency', text: 'Clarity in costs, mechanics, and decision pathways.' },
    { icon: Layers, title: 'Structure', text: 'Robust portfolio architecture with clean governance.' },
    { icon: Target, title: 'Long-term', text: 'Compounding advantages through disciplined execution.' },
  ],
}

export default function ValuePillars({ lang = 'de' }) {
  const pillars = content[lang]

  return (
    <section className="relative w-full bg-[#0f1013] py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">{lang === 'de' ? 'Kernstärken' : 'Core strengths'}</h2>
          <div className="h-px ml-6 flex-1 translate-y-[-4px] bg-white/10" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <p.icon className="h-5 w-5 text-white/80" />
                <div className="h-3 w-px bg-white/10" />
                <span className="text-sm font-medium tracking-wide text-white/90">{p.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{p.text}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1px rgba(200,169,106,0.25)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
