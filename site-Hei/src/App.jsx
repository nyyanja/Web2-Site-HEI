
import './App.css'
import AdmissionSection from './components/AdmissionSection'
import DebouchesSection from './components/DeboucheSection'
import DomainesSection from './components/DomainesSection'
import Footer from './components/Footer'
import PartnersSection from './components/PartnersSection'
import ProgrammePedagogique from './components/ProgrammePedagogique'
import TechLanguagesSection from './components/TechLanguagesSection'

function App() {

  return (
    <>
    <DebouchesSection/>
    <DomainesSection/>
    <AdmissionSection/>
    <ProgrammePedagogique/>
    <TechLanguagesSection/>
    <PartnersSection/>
    <Footer/>
    </>
  )
}

export default App
