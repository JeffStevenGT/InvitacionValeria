import React from "react";
// RUTA CORREGIDA
import imgFondo from "../assets/images/fondo-sobres.jpeg";

export default function Gifts() {
  return (
    <section
      className="h-dvh w-full snap-start flex flex-col justify-center items-center px-6 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${imgFondo})` }}
    >
      {/* Capa más opaca (80%) */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative z-10 w-full max-w-xs mx-auto">
        <div className="bg-white/80 backdrop-blur-md p-10 shadow-2xl rounded-t-full border-b-4 border-dorado relative">
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
