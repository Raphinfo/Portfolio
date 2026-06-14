export default function Technologies() {
  return (
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
  );
}