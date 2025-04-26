// export default function Contact() {
//    return (
//      <section id="contact" className="bg-gray-100 py-16 px-6">
//        <div className="container mx-auto text-center">
//          <h2 className="text-4xl font-bold mb-12 text-gray-800">
//            Contact Me
//          </h2>
 
//          <p className="text-lg text-gray-700 mb-6">
//            Feel free to reach out for collaborations, projects, or just to say hi! 👋
//          </p>
 
//          <div className="space-y-4 text-gray-700">
//            <p><strong>Phone:</strong> <a href="tel:09415723942" className="text-blue-600 hover:underline">09415723942</a></p>
//            <p><strong>Email:</strong> <a href="mailto:aditya283270@gmail.com" className="text-blue-600 hover:underline">aditya283270@gmail.com</a></p>
//            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adityakumarsahu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/adityakumarsahu</a></p>
//          </div>
//        </div>
//      </section>
//    );
//  }
 


import { motion } from "framer-motion";
import { FiPhone, FiMail, FiLinkedin } from "react-icons/fi"; 

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-50 py-20 px-6 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <div className="container mx-auto relative z-10 text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-10 text-gray-800"
        >
          Contact Me
        </motion.h2>

        {/* Contact Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations, projects, or just to say hi! 👋
        </motion.p>

        {/* Contact Details with Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-700 text-lg flex flex-col items-center"
        >
          <p className="flex items-center gap-3">
            <FiPhone className="text-blue-600 text-2xl" />
            <a href="tel:09415723942" className="hover:underline hover:text-blue-800 transition-colors duration-300">
              09415723942
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FiMail className="text-blue-600 text-2xl" />
            <a href="mailto:aditya283270@gmail.com" className="hover:underline hover:text-blue-800 transition-colors duration-300">
              aditya283270@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FiLinkedin className="text-blue-600 text-2xl" />
            <a href="https://www.linkedin.com/in/adityakumarsahu" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-800 transition-colors duration-300">
              linkedin.com/in/adityakumarsahu
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
