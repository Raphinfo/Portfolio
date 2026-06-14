export default function Projects() {
  return (
    <section className="px-8 py-20 border-t border-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projets
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="border border-gray-800 rounded-2xl p-6 hover:border-white transition">
          <h3 className="text-2xl font-bold mb-4">
            Portfolio Website
          </h3>

          <p className="text-gray-400 mb-6">
            Portfolio moderne développé avec Next.js et TailwindCSS.
          </p>

          <div className="flex gap-3 flex-wrap mb-6">
            <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
              Next.js
            </span>

            <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
              TailwindCSS
            </span>

            <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
              TypeScript
            </span>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Voir le projet
          </button>
        </div>

        <div className="border border-gray-800 rounded-2xl p-6 hover:border-white transition">
          <h3 className="text-2xl font-bold mb-4">
            Projet à venir
          </h3>

          <p className="text-gray-400 mb-6">
            Un futur projet full stack sera ajouté ici.
          </p>

          <div className="flex gap-3 flex-wrap mb-6">
            <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
              React
            </span>

            <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>

            <span className="border border-gray-700 px-3 py-1 rounded-full text-sm">
              PostgreSQL
            </span>
          </div>

          <button className="border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-black transition">
            Bientôt
          </button>
        </div>
      </div>
    </section>
  );
}