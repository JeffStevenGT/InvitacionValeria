import Hero from "./components/Hero";
import DateCard from "./components/DateCard";
import Location from "./components/Location";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";

function App() {
  return (
    // CAMBIO IMPORTANTE: h-dvh (Dynamic Viewport Height) ajusta el alto real en iPhones
    <div className="w-full max-w-[420px] h-dvh bg-floral shadow-2xl relative font-sans overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {/* Componentes (Diapositivas) */}
      <Hero />
      <DateCard />
      <Location />
      <Gifts />
      <RSVP />
    </div>
  );
}

export default App;
