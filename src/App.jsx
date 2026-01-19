import Hero from "./components/Hero";
import DateCard from "./components/DateCard";
import Location from "./components/Location";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";

function App() {
  return (
    // CONTENEDOR PRINCIPAL
    // h-screen: Ocupa toda la altura
    // overflow-y-scroll: Permite scrollear
    // snap-y snap-mandatory: Activa el magnetismo vertical obligatorio
    <div className="w-full max-w-[420px] h-screen bg-crema shadow-2xl relative font-sans overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {/* Barra superior decorativa fija (opcional, se mueve con el scroll o se queda fija) */}
      <div className="fixed top-0 z-50 h-1.5 w-full max-w-[420px] bg-gradient-to-r from-vino via-dorado to-vino"></div>

      {/* Cada componente ahora es una "diapositiva" completa */}
      <Hero />
      <DateCard />
      <Location />
      <Gifts />
      <RSVP />
    </div>
  );
}

export default App;
