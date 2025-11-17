export default function FinalCTA() {
  return (
    <section id="consult" className="relative w-full bg-[#0b0b0d] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Decisive finance. Built for you.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">Clarity, precision, and long‑term alignment — start with a short conversation to outline your strategy.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#" className="group relative inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-black" style={{ backgroundColor: '#c8a96a' }}>
            <span className="relative z-10">Request a call</span>
            <span className="absolute inset-0 rounded-md ring-1 ring-black/5" />
            <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 0 0 rgba(200,169,106,0), 0 0 24px 4px rgba(200,169,106,0.28)' }} />
          </a>
        </div>
      </div>
    </section>
  )
}
