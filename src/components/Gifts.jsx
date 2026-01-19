import React from "react";

const Mariposa = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    className="fill-dorado drop-shadow-md"
  >
    <path d="M12 2C12 2 11 3 10 5C9 7 6 9 4 9C2 9 2 6 2 6C2 6 0 8 2 12C4 16 6 16 6 16C6 16 8 16 10 14C11 13 12 11 12 11C12 11 13 13 14 14C16 16 18 16 18 16C18 16 20 16 22 12C24 8 22 6 22 6C22 6 22 9 20 9C18 9 15 7 14 5C13 3 12 2 12 2Z" />
  </svg>
);

export default function Gifts() {
  return (
    <section className="h-dvh w-full snap-start bg-transparent flex flex-col justify-center items-center px-6 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-xs mx-auto">
        {/* Caja Decorativa con Glassmorphism */}
        <div className="bg-white/60 backdrop-blur-md p-10 shadow-xl rounded-t-full border-b-4 border-dorado relative">
          <div className="absolute -top-6 -right-4 animate-flutter z-20">
            <Mariposa />
          </div>

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
              conmigo, habrá un buzón en la recepción."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
