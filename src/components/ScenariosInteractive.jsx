import { motion } from 'framer-motion'

const scenarios = [
  { title: 'Entrepreneur Liquidity', points: ['Optimize cash flow buffers', 'Tax-aware distributions', 'Downside hedging'] },
  { title: 'Family Wealth Plan', points: ['Education and legacy frames', 'Balanced growth cadence', 'Multi-account coordination'] },
  { title: 'Property Financing', points: ['Rate strategy & amortization', 'Equity release options', 'Rental yield optimization'] },
  { title: 'Executive Compensation', points: ['Equity vesting strategy', 'Diversification rails', 'Efficiency and risk balance'] },
]

export default function ScenariosInteractive() {
  return (
    <section className="relative w-full bg-[#0f1013] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">Financial scenarios</h2>
          <div className="h-px flex-1 translate-y-[-4px] bg-white/10 ml-6" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-wide text-white/90">{s.title}</span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#c8a96a' }} />
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="inline-block h-px w-4 bg-white/30" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1px rgba(200,169,106,0.25)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
