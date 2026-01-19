import { data } from "../data/info";

export default function DateCard() {
  return (
    <section className="py-12 px-6 bg-crema relative">
      <div className="flex flex-col items-center">
        {/* Diseño de Fecha Gigante */}
        <div className="relative flex flex-col items-center justify-center border-y-2 border-vino py-8 w-full max-w-[280px]">
          <span className="font-script text-3xl text-dorado absolute -top-5 bg-crema px-4">
            Sábado
          </span>

          <div className="flex items-baseline gap-2 leading-none text-vino">
            <span className="font-serif text-8xl">{data.fecha.dia}</span>
          </div>

          <span className="font-serif text-2xl text-vino-claro uppercase tracking-widest mt-2">
            {data.fecha.mes}
          </span>
          <span className="font-sans text-dorado tracking-[0.5em] text-sm mt-2">
            {data.fecha.ano}
          </span>

          <span className="font-serif text-xl text-texto mt-4 border-t border-dorado/30 pt-2 w-1/2 text-center">
            {data.fecha.hora}
          </span>
        </div>

        {/* Botón Agendar */}
        <button className="mt-8 px-8 py-3 bg-vino text-crema font-sans text-xs uppercase tracking-widest hover:bg-vino-claro transition-colors shadow-lg cursor-pointer">
          Agregar al Calendario
        </button>
      </div>
    </section>
  );
}
