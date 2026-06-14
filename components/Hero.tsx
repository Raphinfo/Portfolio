export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">

      <h1 className="text-6xl font-bold mb-4">
        Raphael Deuken
      </h1>

      <h2 className="text-2xl text-gray-400 mb-6">
        Étudiant en techniques informatiques
      </h2>

      <p className="max-w-2xl text-gray-500 mb-8">
        Je développe des solutions modernes,
        performantes et centrées sur l’expérience utilisateur.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Voir mes projets
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Contact
        </button>
      </div>

    </section>
  );
}