import { useState, useEffect } from "react";
import { data } from "../data/info";

export default function DateCard() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    min: 0,
    seg: 0,
  });

  useEffect(() => {
    // FECHA OBJETIVO: 60 días a partir de hoy (Simulado)
    // Para una fecha real usa: new Date("2026-09-14T18:00:00")
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 60);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
        const horas = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const min = Math.floor((difference / 1000 / 60) % 60);
        const seg = Math.floor((difference / 1000) % 60);
        setTimeLeft({ dias, horas, min, seg });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full snap-start bg-crema flex flex-col justify-center items-center px-6 relative">
      {/* Marco decorativo */}
      <div className="absolute inset-6 border border-dorado/30 pointer-events-none"></div>

      {/* Fecha Principal */}
      <div className="text-center mb-12 transform scale-100">
        <span className="font-script text-4xl text-dorado block mb-2">
          Sábado
        </span>
        <span className="font-serif text-[6rem] text-vino leading-none block">
          {data.fecha.dia}
        </span>
        <span className="font-serif text-2xl text-vino-claro uppercase tracking-[0.3em] block mt-1">
          {data.fecha.mes}
        </span>
        <span className="font-sans text-dorado tracking-[0.2em] text-sm block mt-2">
          {data.fecha.ano}
        </span>
      </div>

      {/* CONTADOR ELEGANTE */}
      <div className="flex gap-4 items-center justify-center text-vino">
        <TimeUnit value={timeLeft.dias} label="Días" />
        <span className="text-dorado text-xl pb-4">:</span>
        <TimeUnit value={timeLeft.horas} label="Hrs" />
        <span className="text-dorado text-xl pb-4">:</span>
        <TimeUnit value={timeLeft.min} label="Min" />
        <span className="text-dorado text-xl pb-4">:</span>
        <TimeUnit value={timeLeft.seg} label="Seg" />
      </div>

      <p className="font-sans text-[10px] text-texto uppercase tracking-[0.2em] mt-8 opacity-60">
        Falta poco para el gran día
      </p>
    </section>
  );
}

// Subcomponente para cada unidad de tiempo
const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="font-serif text-3xl w-12 text-center">
      {String(value).padStart(2, "0")}
    </span>
    <span className="font-sans text-[9px] uppercase tracking-widest opacity-60">
      {label}
    </span>
  </div>
);
