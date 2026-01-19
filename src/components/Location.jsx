import { data } from "../data/info";

const IconoUbicacion = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-crema"
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
    <section className="py-10 px-8 bg-vino text-crema relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-dorado)_1px,_transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 flex flex-col gap-10">
        {/* Recepción */}
        <div className="text-center group">
          <div className="w-16 h-16 mx-auto bg-dorado rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
            <IconoUbicacion />
          </div>
          <h3 className="font-script text-4xl text-dorado mb-2">
            Ceremonia & Recepción
          </h3>
          <p className="font-serif text-xl mb-1">{data.ubicacion.lugar}</p>
          <p className="font-sans text-sm opacity-80 mb-6">
            {data.ubicacion.direccion}
          </p>

          <a
            href={data.ubicacion.linkMapa}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-dorado px-6 py-2 text-xs uppercase tracking-widest hover:bg-dorado hover:text-vino transition-colors"
          >
            Ver Ubicación
          </a>
        </div>

        {/* Dress Code */}
        <div className="text-center border-t border-dorado/20 pt-8">
          <span className="font-script text-3xl text-dorado block mb-2">
            Código de Vestimenta
          </span>
          <p className="font-serif uppercase tracking-widest text-sm">
            Formal / Etiqueta
          </p>
          <p className="text-xs opacity-60 mt-1 font-sans">
            (Reservado el color blanco y vino)
          </p>
        </div>
      </div>
    </section>
  );
}
