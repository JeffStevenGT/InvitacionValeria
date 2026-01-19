import React from "react";

// Componente SVG Mariposa
const Mariposa = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    className="fill-dorado opacity-80 animate-flutter drop-shadow-lg"
  >
    <path d="M12 2C12 2 11 3 10 5C9 7 6 9 4 9C2 9 2 6 2 6C2 6 0 8 2 12C4 16 6 16 6 16C6 16 8 16 10 14C11 13 12 11 12 11C12 11 13 13 14 14C16 16 18 16 18 16C18 16 20 16 22 12C24 8 22 6 22 6C22 6 22 9 20 9C18 9 15 7 14 5C13 3 12 2 12 2Z" />
  </svg>
);

export default function Gifts() {
  return (
    <section className="h-screen w-full snap-start bg-[#fcf8f2] flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* MARIPOSA VOLADORA */}
      {/* Definimos una ruta en línea usando style para que vuele por la pantalla */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          top: "20%",
          left: "-10%",
          animation: "flyPath 18s linear infinite",
        }}
      >
        {/* offset-path es ideal, pero para soporte total usamos transformación simple combinada con el CSS global */}
        <div
          style={{
            offsetPath: 'path("M0,100 C100,0 200,200 300,50 400,100 500,-50")',
            offsetRotate: "auto",
          }}
        >
          <Mariposa />
        </div>
      </div>

      {/* Segunda Mariposa más pequeña y lenta */}
      <div
        className="absolute z-20 pointer-events-none opacity-50"
        style={{
          bottom: "30%",
          right: "-10%",
          animation: "flyPath 25s linear infinite reverse",
        }}
      >
        <div className="scale-75">
          <Mariposa />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-xs mx-auto">
        {/* Caja estilo tarjeta lujosa */}
        <div className="bg-white/80 backdrop-blur-md p-10 shadow-[0_20px_50px_rgba(197,160,89,0.15)] rounded-t-full border-b-4 border-dorado">
          <div className="text-center">
            <div className="text-5xl mb-6 text-dorado animate-float inline-block">
              ✉️
            </div>

            <h3 className="font-script text-5xl text-vino mb-4">
              Lluvia de Sobres
            </h3>

            <div className="w-16 h-px bg-dorado mx-auto mb-6"></div>

            <p className="font-serif text-texto text-sm leading-loose italic">
              "El mejor regalo es tu presencia. Pero si deseas tener un detalle
              conmigo, podrás depositarlo en el buzón real que encontrarás en la
              recepción."
            </p>

            <div className="mt-6 text-2xl text-dorado">❦</div>
          </div>
        </div>

        {/* Sombra inferior decorativa */}
        <div className="h-4 w-3/4 mx-auto bg-[radial-gradient(ellipse_at_center,_var(--color-dorado)_0%,_transparent_70%)] opacity-30 blur-sm"></div>
      </div>
    </section>
  );
}
