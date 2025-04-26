import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="backdrop-blur-md bg-white/80 shadow-lg border-b border-gray-200 transition-all duration-500 ease-in-out">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo with Hover Effect */}
          <div className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
            Aditya Kumar Sahu
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group transition-all duration-300"
                >
                  <span className="group-hover:text-blue-600">{item}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none transition-all duration-300"
            >
              {menuOpen ? <X size={28} className="transform rotate-45 transition-all duration-300" /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center bg-white/90 py-4 space-y-4 text-gray-700 font-semibold">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg hover:text-blue-600 transition-all duration-300"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
