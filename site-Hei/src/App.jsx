import "./App.css";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import AdmissionSection from './components/AdmissionSection'
import DebouchesSection from './components/DeboucheSection'
import DomainesSection from './components/DomainesSection'
import Footer from './components/Footer'
import PartnersSection from './components/PartnersSection'
import ProgrammePedagogique from './components/ProgrammePedagogique'
import TechLanguagesSection from './components/TechLanguagesSection'


function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <DebouchesSection/>
      <DomainesSection/>
      <AdmissionSection/>
      <ProgrammePedagogique/>
      <TechLanguagesSection/>
      <PartnersSection/>
      <Footer/>
    </div>
  );
}

export default App;
