export default function RSVP() {
  return (
    <section className="h-dvh w-full snap-start bg-transparent flex flex-col justify-between pt-20 relative">
      <div className="flex-grow flex flex-col justify-center px-8 z-10">
        <div className="text-center mb-8">
          <h2 className="font-script text-6xl text-vino mb-2">Confirmar</h2>
          <div className="w-12 h-1 bg-dorado mx-auto mb-4"></div>
          <p className="font-sans text-texto text-xs uppercase tracking-[0.2em]">
            Por favor confirma tu asistencia
          </p>
        </div>

        <form
          className="space-y-6 bg-white/40 backdrop-blur-sm p-6 rounded-xl shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="Nombre Completo"
              className="w-full bg-transparent border-b border-vino/30 py-2 text-center font-serif text-lg text-vino focus:outline-none focus:border-dorado placeholder-vino/40 transition-colors"
            />
          </div>
          <div>
            <select className="w-full bg-transparent border-b border-vino/30 py-2 text-center font-serif text-lg text-vino focus:outline-none focus:border-dorado">
              <option>1 Persona</option>
              <option>2 Personas</option>
              <option>3 Personas</option>
            </select>
          </div>
          <button className="w-full bg-vino text-dorado font-serif py-3 uppercase tracking-[0.2em] text-xs hover:brightness-110 transition-all shadow-lg mt-4 rounded-sm">
            Enviar
          </button>
        </form>
      </div>

      <footer className="bg-vino py-8 text-center mt-auto w-full z-10">
        <p className="text-dorado font-script text-3xl">Valeria</p>
        <p className="text-crema/50 text-[10px] uppercase tracking-[0.3em] mt-2">
          Gracias por acompañarnos
        </p>
      </footer>
    </section>
  );
}
