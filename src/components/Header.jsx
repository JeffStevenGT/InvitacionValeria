// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="w-full py-10 flex flex-col items-center justify-center bg-[#6B0F1A] text-[#D4C19C] relative overflow-hidden">
      {/* Adornos florales SVG de fondo */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 transform -translate-x-10 -translate-y-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D4C19C"
            d="M41.3,-53.4C55.4,-45.9,69.9,-35.6,77.4,-21.6C84.9,-7.6,85.4,10.2,79.3,26.1C73.1,42,60.4,56.1,45.4,65.8C30.4,75.5,13.1,80.8,-3.7,85.9C-20.6,91,-39.2,95.9,-54.1,89.5C-69,83.1,-80.2,65.4,-86.6,47.5C-93,29.6,-94.6,11.5,-89.5,-4.5C-84.5,-20.6,-72.8,-34.6,-60.2,-46.8C-47.6,-59,-34,-69.4,-19.5,-74.9C-4.9,-80.4,10.5,-81.1,25.2,-75.9C39.8,-70.7,53.6,-59.6,63.8,-46.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <span className="text-[#E8B4BC] tracking-[0.2em] text-xs uppercase font-semibold mb-2 z-10">
        Estás invitado a celebrar
      </span>
      <h1 className="text-5xl font-script tracking-wider text-[#D4C19C] drop-shadow-md z-10">
        Mis Quince
      </h1>
      <div className="w-24 h-1 bg-[#D4C19C] my-2 z-10"></div>
      <span className="text-[#E8B4BC] font-serif italic text-xl z-10">
        Valeria
      </span>
    </header>
  );
};

export default Header;
