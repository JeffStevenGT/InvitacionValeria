// src/components/Footer.jsx
import React from "react";
import { eventInfo } from "../data/info";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-[#6B0F1A] text-[#FFFBF7] text-center relative overflow-hidden">
      {/* Fondo con imagen y superposición */}
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/564x/c0/67/95/c06795665148c7111442702613842930.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[#6B0F1A]/60"></div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <h3 className="font-script text-6xl text-[#D4C19C] drop-shadow-lg">
          {eventInfo.quinceanera}
        </h3>

        <div className="w-24 h-1 bg-[#D4C19C]"></div>

        <p className="font-serif text-xl text-[#FFFBF7] italic max-w-sm">
          "Gracias por ser parte de este día tan especial en mi vida."
        </p>

        <div className="flex flex-col gap-4 mt-8">
          <h4 className="font-script text-3xl text-[#E8B4BC]">
            #QuinceValeria2024
          </h4>
          <div className="flex items-center justify-center gap-2 text-[#D4C19C]">
            <span className="text-2xl">📱</span>
            <span className="font-serif text-lg tracking-wider">
              {eventInfo.contact}
            </span>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4C19C]/80 font-serif">
            Con amor, Valeria y familia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
