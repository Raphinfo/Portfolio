export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-6 border-b border-gray-800 gap-4">
      <h1 className="text-xl font-bold">
        RD
      </h1>

      <ul className="flex gap-6 text-sm md:text-base text-gray-400">
        <a
          href="#"
          className="hover:text-white transition"
        >
          Accueil
        </a>

        <a
          href="#projects"
          className="hover:text-white transition"
        >
          Projets
        </a>

        <a
          href="https://github.com/Raphinfo"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="mailto:deukenrapho@yahoo.com"
          className="hover:text-white transition"
        >
          Contact
        </a>
      </ul>
    </nav>
  );
}