export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">
          RD
        </h1>

        <ul className="flex gap-6 text-gray-400">
          <li className="hover:text-white cursor-pointer transition">
            Accueil
          </li>

          <li className="hover:text-white cursor-pointer transition">
            Projets
          </li>

          <li className="hover:text-white cursor-pointer transition">
            Contact
          </li>
        </ul>
      </nav>

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

      <section className="px-8 py-20 border-t border-gray-800">
  <h2 className="text-4xl font-bold text-center mb-12">
    Technologies
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

    <div className="border border-gray-800 rounded-2xl p-6 hover:border-white transition">
      <h3 className="text-2xl font-semibold mb-4">
        Frontend
      </h3>

      <p className="text-gray-400">
        React, Next.js, TailwindCSS,
        TypeScript
      </p>
    </div>

    <div className="border border-gray-800 rounded-2xl p-6 hover:border-white transition">
      <h3 className="text-2xl font-semibold mb-4">
        Backend
      </h3>

      <p className="text-gray-400">
        Node.js, Express,
        API REST
      </p>
    </div>

    <div className="border border-gray-800 rounded-2xl p-6 hover:border-white transition">
      <h3 className="text-2xl font-semibold mb-4">
        Outils
      </h3>

      <p className="text-gray-400">
        Git, GitHub, Linux,
        VS Code
      </p>
    </div>

  </div>
</section>

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
        Portfolio moderne développé avec Next.js
        et TailwindCSS.
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

    </main>
  );
}