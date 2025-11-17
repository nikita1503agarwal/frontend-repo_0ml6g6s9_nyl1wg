import { useState } from 'react'
import HeroIntro from './components/HeroIntro'
import ValuePillars from './components/ValuePillars'
import ProcessFlow from './components/ProcessFlow'
import ScenariosInteractive from './components/ScenariosInteractive'
import ExpertiseStrip from './components/ExpertiseStrip'
import CredibilityGrid from './components/CredibilityGrid'
import FinalCTA from './components/FinalCTA'
import ContactForm from './components/ContactForm'

const GOLD_LEVELS = {
  subtle: { color: '#c8a96a', glow: 0.16 },
  normal: { color: '#c8a96a', glow: 0.28 },
  strong: { color: '#d4b679', glow: 0.4 },
}

function App() {
  const [lang, setLang] = useState('de') // 'de' | 'en'
  const [accent, setAccent] = useState('normal') // 'subtle' | 'normal' | 'strong'

  const goldCfg = GOLD_LEVELS[accent]

  return (
    <div
      className="min-h-screen w-full bg-[#0b0b0d]"
      style={{
        ['--gold']: goldCfg.color,
        ['--gold-glow']: goldCfg.glow,
      }}
    >
      {/* Top controls: language + accent level (minimal, unobtrusive) */}
      <div className="pointer-events-auto fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-[#0f1013]/80 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
        <button
          onClick={() => setLang((l) => (l === 'de' ? 'en' : 'de'))}
          className="rounded-full px-2 py-1 transition-colors hover:text-white"
          aria-label="Toggle language"
        >
          {lang === 'de' ? 'DE' : 'EN'}
        </button>
        <span className="mx-1 h-3 w-px bg-white/15" />
        <label className="hidden sm:block">Accent</label>
        <select
          className="rounded-md bg-transparent px-2 py-1 outline-none"
          value={accent}
          onChange={(e) => setAccent(e.target.value)}
          aria-label="Accent intensity"
        >
          <option value="subtle">Subtle</option>
          <option value="normal">Normal</option>
          <option value="strong">Strong</option>
        </select>
      </div>

      <HeroIntro lang={lang} />
      <ValuePillars lang={lang} />
      <ProcessFlow lang={lang} />
      <ScenariosInteractive lang={lang} />
      <ExpertiseStrip />
      <CredibilityGrid lang={lang} />
      <FinalCTA lang={lang} />
      <ContactForm lang={lang} />

      <footer className="border-t border-white/10 bg-[#0b0b0d] py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AB FINANZEN · Munich
      </footer>
    </div>
  )
}

export default App
