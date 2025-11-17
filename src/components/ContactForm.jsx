import { useState } from 'react'

export default function ContactForm({ lang = 'de' }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const T = {
    de: {
      title: 'Kontakt aufnehmen',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      submit: 'Senden',
      success: 'Vielen Dank! Wir melden uns zeitnah.',
      error: 'Senden fehlgeschlagen. Bitte erneut versuchen.',
    },
    en: {
      title: 'Get in touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      success: 'Thank you! We will get back shortly.',
      error: 'Failed to send. Please try again.',
    },
  }[lang]

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      // Placeholder: In a full integration, this would POST to backend
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[#0f1013] py-20">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">{T.title}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-white/60">{T.name}</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-[var(--gold)]"
              placeholder="Max Mustermann"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-white/60">{T.email}</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-[var(--gold)]"
              placeholder="name@email.de"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-white/60">{T.message}</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-[var(--gold)]"
              placeholder={lang === 'de' ? 'Kurz Ihr Anliegen skizzieren…' : 'Briefly describe your request…'}
            />
          </div>
          <div className="pt-2">
            <button
              disabled={status === 'sending'}
              className="group relative inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-black focus:outline-none disabled:opacity-60"
              style={{ backgroundColor: 'var(--gold)' }}
            >
              <span className="relative z-10">{status === 'sending' ? (lang === 'de' ? 'Senden…' : 'Sending…') : T.submit}</span>
              <span className="absolute inset-0 rounded-md ring-1 ring-black/5" />
              <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: `0 0 0 0 rgba(200,169,106,0), 0 0 24px 4px rgba(200,169,106,var(--gold-glow))` }} />
            </button>
          </div>
          {status === 'success' && (
            <p className="text-center text-sm text-white/70">{T.success}</p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-400">{T.error}</p>
          )}
        </form>
      </div>
    </section>
  )
}
