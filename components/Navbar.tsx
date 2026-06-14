export default function Navbar() {
  return (
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
  );
}