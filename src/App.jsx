import HeroIntro from './components/HeroIntro'
import ValuePillars from './components/ValuePillars'
import ProcessFlow from './components/ProcessFlow'
import ScenariosInteractive from './components/ScenariosInteractive'
import ExpertiseStrip from './components/ExpertiseStrip'
import CredibilityGrid from './components/CredibilityGrid'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0d]">
      <HeroIntro />
      <ValuePillars />
      <ProcessFlow />
      <ScenariosInteractive />
      <ExpertiseStrip />
      <CredibilityGrid />
      <FinalCTA />
      <footer className="border-t border-white/10 bg-[#0b0b0d] py-10 text-center text-xs text-white/50">© {new Date().getFullYear()} AB FINANZEN · Munich</footer>
    </div>
  )
}

export default App
