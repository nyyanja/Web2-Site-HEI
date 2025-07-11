import "./App.css";
import DomainesSection from "./components/DomainesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <DomainesSection />
    </div>
  );
}

export default App;
