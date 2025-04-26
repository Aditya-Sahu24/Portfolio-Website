import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto py-20 px-6 relative bg-gradient-to-r from-blue-50 via-white to-blue-50 text-center"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-16 text-gray-800 tracking-tight"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-left"
        >
          {/* Gradient Background Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

          {/* Project Content */}
          <h3 className="text-3xl font-semibold text-blue-600 mb-4 relative z-10">
            MediAssist – Hospital Management System
          </h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed relative z-10">
            A web-based hospital management application facilitating efficient handling of core operations such as Patients, Doctors, Appointments, Medical Records, and Prescriptions.
          </p>
          <p className="text-sm text-gray-500 relative z-10">
            <strong>Technologies Used:</strong> React.js, TailwindCSS, Node.js, Express.js, MSSQL Server
          </p>
        </motion.div>

        {/* Project 3 - Portfolio Website */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-left"
        >
          {/* Gradient Background Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 via-transparent to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

          {/* Project Content */}
          <h3 className="text-3xl font-semibold text-blue-600 mb-4 relative z-10">
            Portfolio Website – Personal Webpage
          </h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed relative z-10">
            A personal portfolio website showcasing my skills, projects, and achievements, built with React and TailwindCSS for a responsive and modern design.
          </p>
          <p className="text-sm text-gray-500 relative z-10">
            <strong>Technologies Used:</strong> React, TailwindCSS, JavaScript
          </p>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-left"
        >
          {/* Gradient Background Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 via-transparent to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

          {/* Project Content */}
          <h3 className="text-3xl font-semibold text-blue-600 mb-4 relative z-10">
            Responsive Web Page Template
          </h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed relative z-10">
            Developed a fully responsive web page template using HTML, CSS, and Bootstrap, ensuring seamless adaptability across desktops, tablets, and smartphones.
          </p>
          <p className="text-sm text-gray-500 relative z-10">
            <strong>Technologies Used:</strong> HTML, CSS, Bootstrap
          </p>
        </motion.div>
      </div>
    </section>
  );
}
