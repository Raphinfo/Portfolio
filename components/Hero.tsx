"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center text-center px-6 py-32"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-6xl font-bold mb-4"
      >
        Raphael Deuken
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl text-gray-400 mb-6"
      >
        Étudiant en techniques informatiques
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="max-w-2xl text-gray-500 mb-8"
      >
        Je développe des solutions modernes,
        performantes et centrées sur l’expérience utilisateur.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-4"
      >
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Voir mes projets
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Contact
        </button>
      </motion.div>
    </motion.section>
  );
}