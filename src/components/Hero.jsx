import { data } from "../data/info";

export default function Hero() {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center items-center text-center bg-crema overflow-hidden px-6">
      {/* Fondo Floral Tenue */}
      <img
        src="https://images.unsplash.com/photo-1588410712972-e14a1c6e147f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        alt="Fondo Floral"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 flex flex-col items-center gap-2 w-full animate-fade-in">
        {/* Intro */}
        <p className="text-vino text-xs tracking-[0.25em] uppercase font-sans mb-4">
          Celebrando los
        </p>

        {/* Bloque Principal */}
        <div className="relative py-8 border-y border-dorado/30 w-full">
          <h1 className="font-script text-[5.5rem] text-vino leading-[0.7] drop-shadow-sm z-10 relative">
            {data.nombre}
          </h1>
          <p className="font-serif text-dorado text-lg tracking-[0.4em] uppercase mt-4 ml-1">
            Mis XV Años
          </p>
        </div>

        {/* Nombres de los padres INTEGRADOS justo debajo */}
        <div className="mt-6 flex flex-col gap-2">
          <p className="font-sans text-[10px] uppercase text-texto tracking-widest">
            Con la compañía de mis padres
          </p>
          <div className="font-serif text-vino-claro text-lg flex flex-col gap-1 items-center">
            <span>{data.padres.mama}</span>
            <span className="text-dorado text-xs font-sans">&</span>
            <span>{data.padres.papa}</span>
          </div>
        </div>
      </div>

      {/* Flecha indicadora */}
      <div className="absolute bottom-6 animate-bounce text-vino opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
