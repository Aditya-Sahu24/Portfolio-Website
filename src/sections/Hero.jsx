import { motion } from "framer-motion";
import ProfileImg from "../assets/images/profileImg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white pt-16 px-4 overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800 text-center"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Aditya Kumar Sahu
        </span>
      </motion.h1>

      {/* Animated Floating Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0], // Floating effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="my-6"
      >
        <img
          src={ProfileImg}
          alt="Aditya Kumar Sahu"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-lg md:text-xl text-gray-600 mb-10 text-center max-w-2xl"
      >
        Software Engineer | Full Stack Developer | Crafting Seamless Digital
        Experiences
      </motion.p>

      {/* Animated Button */}
      <motion.a
        href="/resume.pdf"
        download
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(59,130,246,0.6)",
        }}
        className="px-8 py-3 bg-blue-600 text-white rounded-full text-base md:text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
      >
        Download Resume
      </motion.a>
    </section>
  );
}
