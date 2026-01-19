export default function Gifts() {
  return (
    <section className="h-screen w-full snap-start bg-crema flex flex-col justify-center items-center px-6">
      <div className="border-2 border-dorado/30 p-10 relative max-w-xs mx-auto text-center bg-white/50 backdrop-blur-sm shadow-xl rounded-sm">
        {/* Esquinas decorativas externas */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-vino"></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-vino"></div>

        <div className="text-6xl mb-6 block animate-float">✉️</div>
        <h3 className="font-serif text-vino text-2xl mb-4 uppercase tracking-wider">
          Lluvia de Sobres
        </h3>
        <p className="font-sans text-texto text-base leading-relaxed text-balance">
          Tu presencia es mi mejor regalo. Si deseas tener un detalle conmigo,
          habrá un buzón disponible en la recepción.
        </p>
      </div>
    </section>
  );
}
