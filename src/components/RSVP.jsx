export default function RSVP() {
  return (
    <section className="h-dvh w-full snap-start bg-floral-pattern flex flex-col justify-between pt-20 relative">
      <div className="flex-grow flex flex-col justify-center px-8">
        <div className="text-center mb-10">
          <h2 className="font-script text-6xl text-vino mb-2">Confirmar</h2>
          <div className="w-12 h-1 bg-dorado mx-auto mb-4"></div>
          <p className="font-sans text-texto text-xs uppercase tracking-[0.2em]">
            Por favor confirma tu asistencia
          </p>
        </div>

        <form
          className="space-y-8 max-w-xs mx-auto w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="Nombre Completo"
              className="w-full bg-transparent border-b-2 border-vino/20 py-3 text-center font-serif text-xl text-vino focus:outline-none focus:border-dorado placeholder-vino/30 transition-colors"
            />
          </div>
          <div className="relative">
            <select className="w-full bg-transparent border-b-2 border-vino/20 py-3 text-center font-serif text-xl text-vino focus:outline-none focus:border-dorado">
              <option>1 Persona</option>
              <option>2 Personas</option>
              <option>3 Personas</option>
            </select>
          </div>
          <button className="w-full bg-vino text-dorado font-serif py-4 uppercase tracking-[0.2em] text-sm hover:brightness-110 transition-all shadow-xl mt-8 rounded-sm">
            Enviar Confirmación
          </button>
        </form>
      </div>

      <footer className="bg-vino py-8 text-center mt-auto w-full">
        <p className="text-dorado font-script text-3xl">Valeria</p>
        <p className="text-crema/50 text-[10px] uppercase tracking-[0.3em] mt-2">
          Gracias por acompañarnos
        </p>
      </footer>
    </section>
  );
}
