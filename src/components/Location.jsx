import { data } from "../data/info";

const IconoUbicacion = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-vino"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

export default function Location() {
  return (
    <section className="h-dvh w-full snap-start bg-transparent text-vino flex flex-col justify-center items-center px-8 relative text-center">
      {/* Tarjeta Glassmorphism para resaltar sobre el fondo floral */}
      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-dorado/20 shadow-sm w-full">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-dorado rounded-full flex items-center justify-center mb-6 shadow-xl animate-float">
              <IconoUbicacion />
            </div>
            <h3 className="font-script text-5xl text-vino-claro mb-4">
              Recepción
            </h3>
            <p className="font-serif text-2xl mb-2 leading-tight">
              {data.ubicacion.lugar}
            </p>
            <p className="font-sans text-sm opacity-80 mb-6 px-4">
              {data.ubicacion.direccion}
            </p>

            <a
              href={data.ubicacion.linkMapa}
              target="_blank"
              rel="noreferrer"
              className="border border-dorado px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-dorado hover:text-white transition-all duration-300"
            >
              Ver Mapa
            </a>
          </div>

          <div className="w-full border-t border-dorado/20 pt-6 mt-2">
            <span className="font-script text-3xl text-dorado block mb-2">
              Código de Vestimenta
            </span>
            <p className="font-serif uppercase tracking-widest text-sm">
              Formal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
