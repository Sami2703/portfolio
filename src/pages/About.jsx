import React, { useRef } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Passport.jpg";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiTypescript, SiNextdotjs, SiJira  } from "react-icons/si";
import ParticlesInt from "react-tsparticles";
import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";


const About = () => {

   const imageRef = useRef(null);

   const handleMouseMove = (e) => {
  const { clientX, clientY } = e;

  const x = (window.innerWidth / 2 - clientX) / 25;
  const y = (window.innerHeight / 2 - clientY) / 25;

  if (imageRef.current) {
    imageRef.current.style.transform = `
      translate(${x}px, ${y}px)
    `;
  }
};
    // const particlesInit = async (main) => {
    //   await loadFull(main);
    // };

    const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "20+" },
    ];

    const icons = [
    { icon: <FaReact />, style: "top-0 left-10 text-cyan-400" },
    { icon: <FaJs />, style: "top-13 right-[-12] text-yellow-400" },
    { icon: <FaHtml5 />, style: "bottom-10 left-0 text-orange-500" },
    { icon: <FaCss3Alt />, style: "bottom-0 right-12 text-blue-400" },
    { icon: <FaBootstrap />, style: "top-0 right-13 text-purple-500" },
    { icon: <SiTailwindcss />, style: "top-14 right-[-2px] text-cyan-500" },
    { icon: <SiRedux />, style: "top-1/2 right-[-18px] text-cyan-500" },
    { icon: <FaGitAlt />, style: "top-1/2 left-[-20px] text-red-500" },
    { icon: <SiJira />, style: "bottom-0 left-12 text-blue-400" },
    { icon: <SiNextdotjs />, style: "bottom-[-1] left-32 text-white-300" },
    ];
  return (
    <div
    onMouseMove={handleMouseMove}
    className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white flex items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20">
      <div className="absolute top-20 left-10 sm:left-10 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 sm:right-10 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div
  className="
    relative z-10
    grid md:grid-cols-2
    gap-14
    items-center
    max-w-7xl
    mx-auto
    w-full
    bg-white/5
    backdrop-blur-xl
    border border-white/10
    rounded-3xl
    shadow-2xl
    p-8 md:p-14
  "
>

        {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">About Me</h2>
          <p className="text-gray-300 leading-8 text-[15px] md:text-[16px]">
            Frontend / UI Developer with 3+ years of experience in designing and developing scalable, high-performance web applications using React.js, JavaScript (ES6+), Redux, Context API, HTML5, CSS3, Tailwind CSS, and RESTful APIs. Experienced in building responsive, user-focused interfaces with strong attention to performance, usability, and modern design principles.

            Skilled in component-based architecture, API integration, state management, and creating seamless user experiences across devices and browsers. Along with frontend expertise, I have hands-on experience with Node.js, Express.js, MongoDB, and MERN stack development, providing a solid understanding of full-stack workflows and application architecture.

            Experienced in working within Agile teams using Jira, Git/GitHub, and CI/CD practices, while also mentoring junior developers, interns, conducting code reviews, and collaborating with cross-functional teams to deliver high-quality solutions. Passionate about clean, maintainable code, continuous learning, and adapting to modern technologies to build impactful digital products.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
            {stats.map((stat, i) => (
              <div key={i} className="
  bg-white/5
  backdrop-blur-md
  border border-white/10
  rounded-2xl
  p-4 sm:p-5
  min-h-[120px]
  flex flex-col
  items-center
  justify-center
  text-center
  hover:scale-105
  md:hover:scale-105
  hover:border-pink-500/40
  transition-all duration-300
">
                <h3 className="text-xl text-pink-400">{stat.value}</h3>
                <p className="text-sm sm:text-base leading-5 break-words">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* </div> */}

        {/* RIGHT */}
        <motion.div
          className="relative flex justify-center items-center mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
          ref={imageRef}
          className="relative transition-transform duration-200 ease-out">

            {/* IMAGE */}
            <img
              src={profileImg}
              alt="profile"
              className="
  w-52 h-52
sm:w-64 sm:h-64
md:w-72 md:h-72
lg:w-80 lg:h-80
  rounded-full
  border-4 border-pink-400/60
  object-cover
  shadow-[0_0_60px_rgba(236,72,153,0.35)]
  hover:scale-105
  transition-all duration-500
"
            />

            {/* FLOATING ICONS */}
            {icons.map((item, i) => (
              <motion.div
                key={i}
                className={`absolute text-xl sm:text-2xl md:text-3xl ${item.style}`}
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i }}
                 whileHover={{
    scale: 2,
  }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
}

export default About