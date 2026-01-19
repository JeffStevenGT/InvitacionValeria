// src/components/Details.jsx
import React from "react";
import { eventInfo } from "../data/info";

// Iconos SVG
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[#D4C19C]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[#D4C19C]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const DressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[#D4C19C]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const Details = () => {
  return (
    <section className="w-full bg-[#6B0F1A] text-[#FFFBF7] py-12 px-6 relative">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="flex flex-col gap-12 relative z-10">
        {/* 1. FECHA */}
        <div className="text-center">
          <div className="inline-block p-4 border-2 border-[#D4C19C] rounded-full mb-4 shadow-lg bg-[#FFFBF7]">
            <CalendarIcon />
          </div>
          <h3 className="text-[#D4C19C] font-script text-4xl mb-2">
            La Celebración
          </h3>
          <p className="text-2xl font-serif uppercase tracking-widest border-b border-[#D4C19C]/50 pb-2 inline-block">
            {eventInfo.date}
          </p>
          <p className="text-xl mt-2 font-serif">{eventInfo.time}</p>
        </div>

        {/* 2. LUGAR */}
        <div className="text-center">
          <div className="inline-block p-4 border-2 border-[#D4C19C] rounded-full mb-4 shadow-lg bg-[#FFFBF7]">
            <LocationIcon />
          </div>
          <h3 className="text-[#D4C19C] font-script text-4xl mb-2">
            Recepción
          </h3>
          <p className="text-xl font-serif font-bold">{eventInfo.location}</p>
          <p className="text-[#FFFBF7]/80 text-md mb-4 font-serif">
            {eventInfo.address}
          </p>
          <a
            href="#"
            className="px-6 py-2 bg-[#D4C19C] text-[#6B0F1A] text-sm uppercase tracking-wider rounded-full font-bold hover:bg-[#E8B4BC] transition shadow-md"
          >
            Ver Mapa
          </a>
        </div>

        {/* 3. VESTIMENTA */}
        <div className="text-center">
          <div className="inline-block p-4 border-2 border-[#D4C19C] rounded-full mb-4 shadow-lg bg-[#FFFBF7]">
            <DressIcon />
          </div>
          <h3 className="text-[#D4C19C] font-script text-4xl mb-2">
            Código de Vestir
          </h3>
          <p className="text-xl font-serif italic border-b border-[#D4C19C]/50 pb-2 inline-block">
            {eventInfo.dressCode}
          </p>
        </div>
      </div>

      {/* Sección Regalos */}
      <div className="mt-16 text-center border-t-2 border-b-2 border-[#D4C19C] py-10 relative z-10 bg-[#FFFBF7]/10 rounded-lg mx-4">
        <span className="text-5xl mb-4 block text-[#D4C19C]">🎁</span>
        <h3 className="font-script text-[#D4C19C] text-3xl mb-4">
          Lluvia de Sobres
        </h3>
        <p className="text-md text-[#FFFBF7]/90 px-6 font-serif leading-relaxed max-w-sm mx-auto">
          Su presencia es mi mayor regalo. Si desean hacerme un presente en
          efectivo, habrá un buzón disponible.
        </p>
      </div>
    </section>
  );
};

export default Details;
