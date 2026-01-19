import { data } from "../data/info";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-10 px-6 text-center flex flex-col items-center bg-crema overflow-hidden">
      {/* IMAGEN DECORATIVA SUPERIOR (Reemplaza src con tu png de flores) */}
      <img
        src="https://images.unsplash.com/photo-1588410712972-e14a1c6e147f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        alt="Flores"
        className="absolute top-0 left-0 w-full h-48 object-cover opacity-30 mask-image-gradient-b"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }}
      />

      {/* Intro Padres */}
      <div className="relative z-10 animate-fade-in space-y-4 mt-8">
        <p className="text-vino text-xs tracking-[0.2em] uppercase font-sans">
          Con la bendición de Dios y mis padres
        </p>
        <div className="flex flex-col items-center gap-1 font-serif text-vino-claro">
          <span className="text-lg border-b border-dorado/40 pb-1 px-4">
            {data.padres.mama}
          </span>
          <span className="text-dorado font-script text-2xl">&</span>
          <span className="text-lg border-b border-dorado/40 pb-1 px-4">
            {data.padres.papa}
          </span>
        </div>
      </div>

      {/* Título Principal */}
      <div className="relative z-10 my-12 animate-fade-in">
        <h1 className="font-script text-8xl text-vino drop-shadow-sm leading-[0.6] pr-4">
          {data.nombre}
        </h1>
        <p className="font-serif text-dorado text-xl tracking-[0.4em] mt-4 ml-2 uppercase">
          Mis XV Años
        </p>
      </div>

      <p className="relative z-10 font-sans text-texto text-sm italic max-w-xs mx-auto leading-relaxed text-balance">
        "{data.frase}"
      </p>
    </section>
  );
}
