import { motion } from "framer-motion"; // Make sure framer-motion is installed

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6"
    >
      <div className="container mx-auto">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto transform hover:scale-105"
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-4 hover:text-blue-700 transition-all duration-300">
            Software Developer
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Multifacet Softwares Systems Pvt. Ltd. - Kanpur, India
            <br />
            <span className="text-base text-gray-500">
              November 2024 - Present
            </span>
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
            <li>
              Designed intuitive and responsive user interfaces using React,
              Vite, Material UI, and TailwindCSS.
            </li>
            <li>
              Integrated APIs to ensure dynamic and efficient data flow across
              components.
            </li>
            <li>
              Managed frontend-to-backend communication using Node.js and MSSQL
              Server.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver scalable and
              maintainable web solutions.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
