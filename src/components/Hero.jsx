import { data } from "../data/info";
// RUTA CORREGIDA
import imgFondo from "../assets/images/fondo-hero.png";

export default function Hero() {
  return (
    <section
      className="relative h-dvh w-full snap-start flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${imgFondo})` }}
    >
      {/* Capa más opaca (85%) para que el fondo sea más sutil */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative z-10 flex flex-col items-center gap-2 w-full animate-fade-in mt-10">
        <p className="text-vino text-xs tracking-[0.25em] uppercase font-sans mb-2">
          Celebrando los
        </p>

        <div className="relative py-6 w-full">
          <h1 className="font-script text-[5.5rem] text-vino leading-[0.7] drop-shadow-sm">
            {data.nombre}
          </h1>
          <p className="font-serif text-dorado text-lg tracking-[0.4em] uppercase mt-4 ml-1">
            Mis XV Años
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 p-4 border-t border-b border-dorado/30 w-3/4 mx-auto bg-white/40 backdrop-blur-sm rounded-sm">
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

      <div className="absolute bottom-8 animate-bounce text-vino opacity-80 z-10">
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
