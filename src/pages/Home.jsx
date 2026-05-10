import React, { useMemo } from "react";
import { motion } from "framer-motion";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const roles = [
    "Full Stack Developer",
    "UI Developer",
    "Vue.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "React.js Developer",

  ];

  // ✅ Stable random positions (no re-render jump)
  // const positions = useMemo(() => {
  //   return roles.map(() => ({
  //     top: Math.random() * 70 + 10, // 10%–80%
  //     left: Math.random() * 70 + 10,
  //     duration: 5 + Math.random() * 3,
  //   }));
  // }, []);

  // 👉 Generate circular positions around center
const positions = useMemo(() => {
  const radius =
  window.innerWidth < 640
    ? 90
    : window.innerWidth < 1024
    ? 140
    : 199; // distance from center (adjust this)

  return roles.map((_, i) => {
    const angle = (i / roles.length) * 2 * Math.PI;

    return {
      x: radius * Math.cos(angle) * 2.3,
      y: radius * Math.sin(angle) * 1.3,
      duration: 4 + Math.random() * 2,
    };
  });
}, []);

  return (
    <>
      <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16">

      <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>
        {/* 🔥 FLOATING TECH TAGS */}
        {/* {roles.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.5,
              y: [0, -30, 0],
              x: [0, 20, -20, 0],
            }}
            transition={{
              duration: positions[i].duration,
              repeat: Infinity,
            }}
            className="absolute bg-white/10 backdrop-blur-md border border-white/20 text-sm px-4 py-2 rounded-full shadow-lg"
            style={{
              top: `${positions[i].top}%`,
              left: `${positions[i].left}%`,
            }}
          >
            {item}
          </motion.div>
        ))} */}

        {roles.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0}}
            animate={{
              opacity: 0.7,
              x: [
  positions[i].x,
  positions[i].x + (window.innerWidth < 640 ? 10 : 30),
  positions[i].x,
],
y: [
  positions[i].y,
  positions[i].y - (window.innerWidth < 640 ? 10 : 25),
  positions[i].y,
],
            }}
            transition={{
              duration: positions[i].duration,
              repeat: Infinity,
              repeatType: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 bg-white/30 text-xs sm:text-sm md:text-base px-3 sm:px-4
py-2 sm:py-3 backdrop-blur-md border border-white/20 bg-gradient-to-r from-orange-300 to-white-700 rounded-full shadow-lg text-white
font-medium "
            style={{
              translateX: "-50%",
              translateY: "-50%",
              margin: "30px",
            }}
          >
            {item}
          </motion.div>
        ))}

        {/* 🔥 MAIN CONTENT */}
        <motion.div
          className="relative z-20 max-w-4xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm Samiksha Sapat
          </h1>

          <TypeAnimation
            sequence={[
              "UI Developer",
              1500,
              "Frontend Developer",
              1500,
              "MERN Stack Developer",
              1500,
              "Full Stack Developer",
              1500,
              "Vue.js Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-pink-400"
          />

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mt-4 leading-7 px-2">
            Frontend / UI Developer with 3+ years of experience in React.js and JavaScript (ES6+), along with hands-on exposure to the MERN stack
          </p>

          <div className="mt-8 flex flex-col lg:flex-row flex-wrap gap-4 justify-center items-center">

  {/* 🔥 Resume Button */}
  <motion.a
    href="/resume.pdf"
    download
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="
flex items-center justify-center gap-2
w-1/2 sm:w-auto
bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
px-6 py-3
rounded-full
text-white
font-semibold
shadow-lg
hover:shadow-pink-500/50
transition-all duration-300
"
  >
    <FaDownload />
    Download Resume
  </motion.a>

  {/* 🔥 LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/in/samiksha-sapat-6ab056208"
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="
flex items-center justify-center gap-2
w-1/2 sm:w-auto
border border-white/20
bg-white/5
backdrop-blur-md
px-6 py-3
rounded-full
hover:bg-white
hover:text-black
transition-all duration-300
"
  >
    <FaLinkedin />
    LinkedIn
  </motion.a>

  {/* 🔥 GitHub */}
  <motion.a
    href="https://github.com/Sami2703"
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="
flex items-center justify-center gap-2
w-1/2 sm:w-auto
border border-white/20
bg-white/5
backdrop-blur-md
px-6 py-3
rounded-full
hover:bg-white
hover:text-black
transition-all duration-300
"
  >
    <FaGithub />
    GitHub
  </motion.a>

</div>
        </motion.div>
      </section>

      <section id="about">
  <About />
</section>

<section id="skills">
  <Skills />
</section>

<section id="services">
  <Services />
</section>

<section id="experience">
  <Experience />
</section>

<section id="projects">
  <Projects />
</section>

<section id="education">
  <Education />
</section>

<section id="contact">
  <Contact />
</section>

<Footer />
    </>
  );
};

export default Home;