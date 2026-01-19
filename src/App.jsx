import Hero from "./components/Hero";
import DateCard from "./components/DateCard";
import Location from "./components/Location";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";

function App() {
  return (
    // Estructura de Scroll Snap vertical
    <div className="w-full max-w-[420px] h-dvh bg-[#1a1a1a] shadow-2xl relative font-sans overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar border-x border-[#1a1a1a]">
      <Hero />
      <DateCard />
      <Location />
      <Gifts />
      <RSVP />
    </div>
  );
}

export default App;
