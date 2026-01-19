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
    // FECHA OBJETIVO + 60 DÍAS
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

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=XV+Años+de+${data.nombre}&details=${data.frase}&location=${data.ubicacion.lugar}&dates=20240914T180000/20240915T020000`;

  return (
    <section className="h-dvh w-full snap-start bg-floral-pattern flex flex-col justify-center items-center px-6 relative">
      {/* Marco decorativo */}
      <div className="absolute inset-6 border border-dorado/30 pointer-events-none"></div>

      <div className="text-center mb-8 transform scale-100 animate-fade-in">
        <span className="font-script text-4xl text-dorado block mb-2">
          Sábado
        </span>
        <span className="font-serif text-[5.5rem] text-vino leading-none block">
          {data.fecha.dia}
        </span>
        <span className="font-serif text-2xl text-vino-claro uppercase tracking-[0.3em] block mt-1">
          {data.fecha.mes}
        </span>
        <span className="font-sans text-dorado tracking-[0.2em] text-sm block mt-2">
          {data.fecha.ano}
        </span>
      </div>

      {/* CONTADOR */}
      <div className="flex gap-3 items-center justify-center text-vino mb-10 bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-dorado/20">
        <TimeUnit value={timeLeft.dias} label="Días" />
        <span className="text-dorado text-xl pb-3">:</span>
        <TimeUnit value={timeLeft.horas} label="Hrs" />
        <span className="text-dorado text-xl pb-3">:</span>
        <TimeUnit value={timeLeft.min} label="Min" />
        <span className="text-dorado text-xl pb-3">:</span>
        <TimeUnit value={timeLeft.seg} label="Seg" />
      </div>

      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-vino px-6 py-3 rounded-sm shadow-lg hover:bg-vino-claro transition-all active:scale-95 group cursor-pointer"
      >
        <span className="text-dorado text-lg">📅</span>
        <span className="text-crema font-serif text-xs uppercase tracking-widest">
          Agendar Fecha
        </span>
      </a>
    </section>
  );
}

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center w-10">
    <span className="font-serif text-2xl font-bold">
      {String(value).padStart(2, "0")}
    </span>
    <span className="font-sans text-[8px] uppercase tracking-widest opacity-70">
      {label}
    </span>
  </div>
);
