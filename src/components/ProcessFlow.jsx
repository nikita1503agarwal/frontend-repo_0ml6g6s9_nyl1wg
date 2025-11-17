import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Assessment', text: 'Clear mapping of goals, constraints, and risk tolerance.' },
  { n: '02', title: 'Architecture', text: 'Design the financial structure with precise allocations.' },
  { n: '03', title: 'Execution', text: 'Implement with disciplined timing and documentation.' },
  { n: '04', title: 'Monitoring', text: 'Ongoing analysis with transparent reporting.' },
]

export default function ProcessFlow() {
  return (
    <section className="relative w-full bg-[#0b0b0d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">Process</h2>
          <div className="h-px flex-1 translate-y-[-4px] bg-white/10 ml-6" />
        </div>
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-4xl font-extrabold tracking-tight text-white/80">{s.n}</span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#c8a96a' }} />
                <span className="text-base font-medium text-white/90">{s.title}</span>
              </div>
              <p className="text-sm text-white/70">{s.text}</p>
              <span className="pointer-events-none absolute right-6 top-6 h-px w-24 origin-left bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-500 group-hover:scale-x-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
