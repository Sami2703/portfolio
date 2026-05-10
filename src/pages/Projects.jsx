import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaPhp,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiAxios,
  SiJira,
  SiMysql,
} from "react-icons/si";

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const projects = [
    {
      name: "ArchaVault – Interior Design Platform",
      url: "https://archivaultdesign.com/react",
      frontTech: [
        { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
        { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
        { icon: <SiAxios className="text-blue-600" />, name: "Axios" },
        { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiMysql className="text-white-300 bg-blue-400" />, name: "MySQL" },
        // { icon: <FaPhp className="text-white-800 bg-purple-500" />, name: "Php" },
        { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
        { icon: <SiJira className="text-blue-800" />, name: "Jira" },
      ],
      description: [
        "Optimized image loading using lazy loading & srcset (40% faster)",
        "Improved video performance with controlled preload",
        "Reduced re-renders using memoization & useCallback",
        "Implemented code splitting for better LCP performance",
      ],
    },
    {
      name: "Granthaa – Real Estate Platform",
      url: "https://granthaadeveloperpvtltd.com",
      frontTech: [
        { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
        { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
        { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiExpress className="text-gray-400" />, name: "Express" },
        { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
        { icon: <SiJira className="text-blue-800" />, name: "Jira" },
      ],
      description: [
        "Developed role-based system (Admin, Leader, Advisor)",
        "Implemented RBAC for secure access control",
        "Built booking & property management system",
        "Designed dynamic commission distribution logic",
        "Integrated REST APIs for real-time updates",
      ],
    },
    {
      name: "WhiteCar – Car Rental Platform",
      url: "https://whitecar.in",
      frontTech: [
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
        { icon: <SiMysql className="text-white-300 bg-blue-400" />, name: "MySQL" },
        { icon: <FaPhp className="text-white-300 bg-purple-700" />, name: "PHP" },
        { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
        { icon: <SiJira className="text-blue-800" />, name: "Jira" },
      ],
      description: [
        "Developed a responsive car rental and ride-sharing platform using React.js and Tailwind CSS",
        "Built booking features including one-way rentals, hourly/full-day plans, and driver hiring",
        "Implemented dynamic vehicle filtering and route-based ride-sharing functionality",
        "Integrated frontend with PHP APIs and MySQL database for booking and trip management",
        "Improved booking flow and UI/UX, increasing booking efficiency by 40%",
        "Added role-based access control for users and administrators",
      ],
    },
    {
      name: "Fintech Solution – Financial Agency Consultants",
      url: "https://www.finworldsolution.org",
      frontTech: [
        { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
        { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
        { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiExpress className="text-gray-400" />, name: "Express" },
        { icon: <FaNodeJs className="text-green-300" />, name: "Nodejs" },
        { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
        { icon: <SiJira className="text-blue-800" />, name: "Jira" },
      ],
      description: [
        "Assembled a full-stack MERN application for financial services like loans and insurance",
        "Crafted adaptive user interfaces using React.js with reusable components",
        "Orchestrated Redux Toolkit for efficient global state management",
        "Planned and integrated REST APIs utilizing Node.js and Express.js",
        "Refined performance using lazy loading and code splitting (35–40% bundle reduction)",
        "Ensured efficient API handling and smooth data flow",
      ],
    },
     {
      name: "Balivansh College Website –  Institutional Platform",
      url: "https://bcynhm.org",
      frontTech: [
        { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
        { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
        { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiExpress className="text-gray-400" />, name: "Express" },
        { icon: <FaNodeJs className="text-green-300" />, name: "Nodejs" },
        { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
        { icon: <SiJira className="text-blue-800" />, name: "Jira" },
      ],
      description: [
        "Programmed a full-stack MERN application for courses, admissions, and student inquiries",
        "Delivered cross-device compatible UI modules for courses, notices, gallery, and contact pages",
        "Managed state leveraging Redux Toolkit and React Hooks",
        "Created REST APIs for admission forms and backend data processing",
        "Boosted performance with optimized API calls and lazy loading",
        "Architected scalable architecture for future enhancements",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20">

      {/* Background Glow */}
<div className="absolute top-10 left-0 sm:left-10 w-40 h-40 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 sm:right-10 w-40 h-40 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
      {/* 🔥 Heading */}
      {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-400 mb-12">
        Projects
      </h2> */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 pb-3"
      >
        Projects
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 leading-7">
        A collection of scalable, responsive, and performance-focused applications
        built using modern frontend and full-stack technologies.
      </p>


      {/* 🔥 Cards */}
      <div className="grid md:grid-cols-3 gap-10">


        {projects.map((project, i) => (
          <div key={i} className="h-[390px] [perspective:1200px]">

            {/* 🔥 FLIP CONTAINER */}
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateY: flippedIndex === i ? 180 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >

              {/* 🔹 FRONT */}
              <div
                className="absolute inset-0 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl flex flex-col"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-xl font-bold text-pink-400 mb-4">
                  {project.name}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.frontTech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 text-sm bg-black/40 border border-white/10 px-3 py-2 rounded-full hover:bg-white/20
transition"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-2 justify-center">

                  {/* Open */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.url, "_blank");
                    }}
                    className="px-4 py-2 border  bg-pink-500 rounded-full hover:bg-pink-600 hover:text-black transition-all duration-300"
                  >
                    Open
                  </button>

                  {/* Flip */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedIndex(i);
                    }}
                    className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
                  >
                    Details
                  </button>

                </div>
              </div>

              {/* 🔹 BACK */}
              <div
                className="absolute inset-0 bg-pink-500/90 p-6 rounded-2xl shadow-xl flex flex-col justify-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-lg font-bold mb-3">
                  Project Details
                </h3>

                <ul className="text-sm space-y-2 flex-1 overflow-y-auto pr-2 custom-scroll">
                  {project.description.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>

                {/* Back Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlippedIndex(null);
                  }}
                  className="mt-4 px-4 py-2 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 text-white rounded-full shadow-2xl flex flex-col justify-center hover:bg-gray-800 transition self-center"
                >
                  Back
                </button>
              </div>

            </motion.div>
          </div>
        ))}

      </div>
      </div>
    </div>
  );
};

export default Projects;