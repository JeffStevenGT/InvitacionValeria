export default function RSVP() {
  return (
    <section className="py-12 px-6 bg-crema pb-32">
      {" "}
      {/* Padding bottom extra para el footer */}
      <div className="text-center mb-8">
        <h2 className="font-script text-5xl text-vino mb-2">Confirmación</h2>
        <p className="font-sans text-texto text-xs uppercase tracking-[0.2em]">
          Por favor confirma tu asistencia
        </p>
      </div>
      <form
        className="max-w-xs mx-auto space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <input
            type="text"
            placeholder="Nombre Completo"
            className="w-full bg-transparent border-b border-vino/30 py-2 text-center font-serif text-vino focus:outline-none focus:border-dorado placeholder-vino/40"
          />
        </div>
        <div>
          <select className="w-full bg-transparent border-b border-vino/30 py-2 text-center font-serif text-vino focus:outline-none text-sm">
            <option>1 Persona</option>
            <option>2 Personas</option>
            <option>Familia (3-4)</option>
          </select>
        </div>
        <button className="w-full bg-vino text-dorado font-serif py-4 uppercase tracking-[0.2em] text-sm hover:brightness-110 transition-all shadow-xl mt-4">
          Enviar
        </button>
      </form>
    </section>
  );
}
