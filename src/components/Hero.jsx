import { data } from "../data/info";

export default function Hero() {
  return (
    // bg-transparent permite ver el fondo floral del App.jsx
    <section className="relative h-dvh w-full snap-start flex flex-col justify-center items-center text-center px-6 bg-transparent">
      <div className="relative z-10 flex flex-col items-center gap-2 w-full animate-fade-in">
        <p className="text-vino text-xs tracking-[0.25em] uppercase font-sans mb-4">
          Celebrando los
        </p>

        <div className="relative py-8 w-full">
          {/* Elemento decorativo detrás del nombre */}
          <div className="absolute inset-x-10 top-1/2 h-px bg-dorado/30 -z-10"></div>

          <h1 className="font-script text-[5.5rem] text-vino leading-[0.7] drop-shadow-sm bg-floral/50 backdrop-blur-[2px] px-2 rounded-xl">
            {data.nombre}
          </h1>
          <p className="font-serif text-dorado text-lg tracking-[0.4em] uppercase mt-4 ml-1">
            Mis XV Años
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 p-4 border-t border-b border-dorado/20 w-3/4">
          <p className="font-sans text-[9px] uppercase text-texto tracking-widest">
            En compañía de mis padres
          </p>
          <div className="font-serif text-vino-claro text-base flex flex-col gap-1 items-center leading-tight">
            <span>{data.padres.mama}</span>
            <span className="text-dorado text-[10px] font-sans">&</span>
            <span>{data.padres.papa}</span>
          </div>
        </div>
      </div>

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
