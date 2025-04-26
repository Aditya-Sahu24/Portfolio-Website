import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-6 border-t border-gray-200 text-center text-gray-600 text-sm"
    >
      <p className="tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          Aditya Kumar Sahu
        </span>. All rights reserved.
      </p>
    </motion.footer>
  );
}
