import { data } from "../data/info";

export default function Hero() {
  return (
    // snap-start: Aquí se detiene el scroll
    // h-screen: Ocupa el 100% de la altura del cel
    <section className="relative h-screen w-full snap-start flex flex-col justify-center items-center text-center bg-crema overflow-hidden px-6">
      {/* IMAGEN DE FONDO (Con opacidad baja para que se lea el texto) */}
      <img
        src="https://images.unsplash.com/photo-1588410712972-e14a1c6e147f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        alt="Fondo Floral"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* CONTENIDO CENTRADO */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="text-vino text-xs tracking-[0.25em] uppercase font-sans animate-fade-in">
          Con la bendición de Dios
        </p>

        {/* Título Principal */}
        <div className="animate-fade-in my-4">
          <h1 className="font-script text-[6rem] text-vino leading-[0.8] drop-shadow-sm">
            {data.nombre}
          </h1>
          <p className="font-serif text-dorado text-xl tracking-[0.4em] uppercase mt-2">
            Mis XV Años
          </p>
        </div>

        <p className="font-serif text-vino-claro text-sm italic max-w-[250px] leading-relaxed">
          "{data.frase}"
        </p>
      </div>

      {/* INDICADOR DE SCROLL (Flecha animada) */}
      <div className="absolute bottom-8 animate-bounce text-vino opacity-50">
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
