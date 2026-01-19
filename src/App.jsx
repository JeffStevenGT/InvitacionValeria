import Hero from "./components/Hero";
import DateCard from "./components/DateCard";
import Location from "./components/Location";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";

function App() {
  return (
    // CONTENEDOR MÓVIL (Ancho fijo, centrado, sombra)
    <div className="w-full max-w-[420px] bg-crema min-h-screen shadow-2xl relative flex flex-col font-sans">
      {/* Barra superior dorada fina */}
      <div className="h-1.5 w-full bg-gradient-to-r from-vino via-dorado to-vino"></div>

      <main className="flex-grow">
        <Hero />
        <DateCard />
        <Location />
        <Gifts />
        <RSVP />
      </main>

      {/* Footer Fijo Decorativo */}
      <footer className="bg-vino py-6 text-center">
        <p className="text-dorado font-script text-2xl">Valeria</p>
        <p className="text-crema/50 text-[10px] uppercase tracking-widest mt-1">
          Gracias por acompañarnos
        </p>
      </footer>
    </div>
  );
}

export default App;
