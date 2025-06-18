// src/features/not-found/NotFound.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        Página no encontrada.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </motion.div>
  );
}
