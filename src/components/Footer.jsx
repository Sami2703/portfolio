import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="
bg-gray-100 text-gray-900
dark:bg-gray-900 dark:text-white
py-12 relative overflow-hidden
transition-all duration-300
">

      {/* Background Gradient */}
      <div className="
absolute inset-0
bg-gradient-to-r
from-pink-200/30 to-cyan-200/30
dark:from-pink-900/20 dark:to-cyan-900/20
"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Samiksha Sapat
            </h3>

            <p className="
text-gray-700
dark:text-gray-400
leading-relaxed p-5
">
              Frontend (React.js) Developer / UI Developer with 3+ years of experience in
              React.js, JavaScript (ES6+), Vue.js, and MERN Stack.
              Passionate about building scalable UI and optimizing performance. I also have backend workflow knowledge with
              Python(Django) along with CI/CD, AWS & Agile tools. I'm a quick learner & can adapt to new technologies easily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 mx-16">
            <h4 className="text-xl font-semibold p-5">
              Quick Links
            </h4>

            <div className="space-y-3 p-5">

              <button
                onClick={() => scrollToSection("about")}
                className="
block
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300
"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="
block
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300
"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("experience")}
                className="
block
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300
"
              >
                Experience
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="
block
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300
"
              >
                Projects
              </button>

               <button
                onClick={() => scrollToSection("services")}
                className="
block
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300
"
              >
                Services
              </button>

               <button
                onClick={() => scrollToSection("education")}
                className="
block
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300
"
              >
                Education
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="
block
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300
"
              >
                Contact
              </button>

            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 p-5">

            <h4 className="text-xl font-semibold">
              Get In Touch
            </h4>

            <p className="text-gray-700 dark:text-gray-400 ">
              Let’s collaborate and build something amazing together.
            </p>

            <div className="space-y-3">

              <a
                href="mailto:samiksha@example.com"
                className="
flex items-center gap-3
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300 text-sm
"
              >
                <FaEnvelope />
                <span>samikshasapat03@gmail.com</span>
              </a>

              <a
                href="https://wa.me/918329886470"
                className="
flex items-center gap-3
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
transition duration-300 text-sm
"
              >
                <FaPhone />
                <span>+91 8329886470</span>
              </a>

              <div className="flex items-center gap-3
text-gray-700
dark:text-gray-400
text-sm">
                <FaMapMarkerAlt />
                <span>Chandrapur, Maharashtra</span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">

              <a
                href="https://github.com/Sami2703"
                target="_blank"
                rel="noreferrer"
                className="p-3
bg-white
dark:bg-gray-800
rounded-lg
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
hover:bg-gray-200
dark:hover:bg-gray-700
transition duration-300
shadow-md"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/samiksha-sapat-6ab056208"
                target="_blank"
                rel="noreferrer"
                className="p-3
bg-white
dark:bg-gray-800
rounded-lg
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
hover:bg-gray-200
dark:hover:bg-gray-700
transition duration-300
shadow-md"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:samikshasapat03@gmail.com"
                className="p-3
bg-white
dark:bg-gray-800
rounded-lg
text-gray-700
dark:text-gray-400
hover:text-pink-500
dark:hover:text-pink-400
hover:bg-gray-200
dark:hover:bg-gray-700
transition duration-300
shadow-md"
              >
                <FaEnvelope size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t
border-gray-300
dark:border-gray-800
pt-6
flex flex-col sm:flex-row
items-center justify-between gap-4">

          <p className="text-gray-700
dark:text-gray-400
text-sm flex items-center gap-2">
            Made with
            <FaHeart className="text-red-500" />
            by Samiksha Sapat
          </p>

          <div className="flex items-center gap-4">

            <p className="text-gray-700 dark:text-gray-400 text-sm">
              © 2026 All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="p-3
bg-pink-500
rounded-lg
text-white
hover:bg-pink-600
transition duration-300
shadow-lg"
            >
              <FaArrowUp size={14} />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;