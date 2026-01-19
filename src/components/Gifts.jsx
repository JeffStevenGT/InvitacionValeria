export default function Gifts() {
  return (
    <section className="py-12 px-6 bg-crema text-center">
      <div className="border border-dorado/50 p-8 relative max-w-xs mx-auto">
        {/* Esquinas decorativas */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-vino"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-vino"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-vino"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-vino"></div>

        <span className="text-4xl block mb-4 animate-float">✉️</span>
        <h3 className="font-serif text-vino text-xl mb-3 uppercase tracking-wider">
          Lluvia de Sobres
        </h3>
        <p className="font-sans text-texto text-sm leading-relaxed">
          Tu presencia es mi mejor regalo. Si deseas tener un detalle conmigo,
          habrá un buzón en la recepción.
        </p>
      </div>
    </section>
  );
}
