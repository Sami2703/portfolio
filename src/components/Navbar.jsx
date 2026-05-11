import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 text-black dark:text-white">

        {/* Logo */}
        <h1 className="font-bold text-xl text-pink-400">
          Samiksha
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row font-bold gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScrollToSection(item.id)}
              className="hover:text-pink-400 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>



        {/* Right Side */}
<div className="flex items-center gap-4">

  {/* Theme Toggle Button */}
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full border border-gray-300
dark:border-white/20
bg-white/80
dark:bg-transparent
text-black
dark:text-white
hover:bg-gray-200
dark:hover:bg-white/10 transition duration-300"
  >
    {theme === "dark" ? (
      <Sun size={20} />
    ) : (
      <Moon size={20} />
    )}
  </button>

  {/* Mobile Menu Button */}
  <button
    className="block md:hidden"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

</div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-6 bg-white dark:bg-black/90 text-black dark:text-white">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScrollToSection(item.id)}
              className="text-left hover:text-pink-400 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;