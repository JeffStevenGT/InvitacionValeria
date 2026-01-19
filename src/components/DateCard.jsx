import { data } from "../data/info";

export default function DateCard() {
  return (
    <section className="h-screen w-full snap-start bg-crema flex flex-col justify-center items-center px-6 relative">
      {/* Decoración de borde */}
      <div className="absolute inset-4 border border-dorado/20 pointer-events-none"></div>

      <div className="scale-110 transform transition-transform duration-700">
        <div className="relative flex flex-col items-center justify-center border-y-2 border-vino py-10 w-[280px]">
          <span className="font-script text-4xl text-dorado absolute -top-6 bg-crema px-4">
            Sábado
          </span>

          <span className="font-serif text-[7rem] text-vino leading-none">
            {data.fecha.dia}
          </span>

          <span className="font-serif text-3xl text-vino-claro uppercase tracking-[0.2em] mt-2">
            {data.fecha.mes}
          </span>

          <div className="flex items-center gap-4 mt-6 w-full justify-center">
            <div className="h-px bg-dorado flex-1"></div>
            <span className="font-sans text-dorado tracking-[0.2em] text-sm">
              {data.fecha.ano}
            </span>
            <div className="h-px bg-dorado flex-1"></div>
          </div>

          <span className="font-serif text-2xl text-texto mt-4">
            {data.fecha.hora}
          </span>
        </div>
      </div>
    </section>
  );
}
