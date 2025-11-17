import { Award, Building2, BadgeCheck, Users2 } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Years active', value: '12+' },
  { icon: Building2, label: 'Partner institutions', value: '18' },
  { icon: BadgeCheck, label: 'Certifications', value: 'MiFID II • BaFin compliant' },
  { icon: Users2, label: 'Client retention', value: '96%' },
]

export default function CredibilityGrid() {
  return (
    <section className="relative w-full bg-[#0f1013] py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">Proof of trust</h2>
          <div className="h-px flex-1 translate-y-[-4px] bg-white/10 ml-6" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-3">
                <s.icon className="h-5 w-5 text-white/80" />
                <div className="h-3 w-px bg-white/10" />
                <span className="text-xs uppercase tracking-widest text-white/60">{s.label}</span>
              </div>
              <div className="text-lg font-semibold text-white/90">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
