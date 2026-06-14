export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-6 border-b border-gray-800 gap-4">

      <h1 className="text-xl font-bold">
        RD
      </h1>

      <ul className="flex gap-6 text-sm md:text-base text-gray-400">

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
  );
}