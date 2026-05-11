import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaCubes,
  FaGlobe,
  FaDatabase,
  FaGitAlt,
  FaLock,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Frontend / UI Development",
      icon: <FaLaptopCode />,
      desc: [
        "Responsive UI development (mobile-first design)",
        "Pixel-perfect UI using Tailwind CSS",
        "Cross-browser compatibility (Chrome, Edge, Safari)",
        "Modern UI animations & user experience",
      ],
    },
    {
      title: "React.js Development",
      icon: <FaCubes />,
      desc: [
        "Component-based architecture & reusable UI",
        "State management (Redux, Context API)",
        "Hooks optimization (useMemo, useCallback)",
        "Scalable SPA development",
      ],
    },
    {
      title: "API Integration",
      icon: <FaServer />,
      desc: [
        "REST API integration with frontend",
        "Async data handling & error management",
        "Axios / Fetch API implementation",
        "Real-time data updates",
      ],
    },
    {
      title: "API Security & Authentication",
      icon: <FaLock />,
      desc: [
        "JWT-based authentication",
        "Secure API communication",
        "Role-Based Access Control (RBAC)",
        "Protected routes & session handling",
      ],
    },
    {
      title: "Performance Optimization",
      icon: <FaRocket />,
      desc: [
        "Lazy loading & code splitting",
        "Reduce re-renders using memoization",
        "Improve Core Web Vitals (LCP, CLS)",
        "Optimized asset & image loading",
      ],
    },
    {
      title: "MERN Stack Development",
      icon: <FaDatabase />,
      desc: [
        "Full-stack apps using MongoDB, Express, React, Node",
        "Database design & API development",
        "CRUD operations & backend integration",
        "End-to-end application development",
      ],
    },
    {
      title: "Version Control (Git/GitHub)",
      icon: <FaGitAlt />,
      desc: [
        "Git version control & branching strategy",
        "Collaboration using GitHub",
        "Pull requests & code reviews",
        "Project version tracking",
      ],
    },
    {
      title: "CI/CD & Deployment",
      icon: <FaGlobe />,
      desc: [
        "Basic CI/CD pipeline understanding",
        "Deployment on Vercel / Netlify",
        "Build optimization & environment configs",
        "Continuous integration practices",
      ],
    },
  ];

  return (
    <div
  className="
  relative min-h-screen overflow-hidden
  bg-white text-black
  dark:bg-gradient-to-br
  dark:from-[#0f172a]
  dark:via-[#111827]
  dark:to-[#1e293b]
  dark:text-white
  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
  py-14 sm:py-16 md:py-20
"
>

      <div className="absolute top-10 left-0 sm:left-10 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 sm:right-10 z-0 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
text-3xl sm:text-4xl md:text-5xl
font-bold text-center
text-pink-500 dark:text-pink-400
mb-8 sm:mb-12
"
      >
        My Services
      </motion.h2>

      <p className="
text-sm sm:text-base text-center
text-gray-700 dark:text-gray-400
max-w-2xl mx-auto
mb-12 sm:mb-16
leading-7 px-2
">
        Building scalable, responsive, and high-performance web applications
        with modern frontend technologies and user-focused experiences.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">

        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{
              rotateY: 8,
              rotateX: 6,
              scale: 1.03,
            }}
            className="group
  relative
  flex flex-col
  h-full
  min-h-[360px]
  sm:min-h-[400px]
 bg-gray-100
  dark:bg-white/5

  backdrop-blur-xl

  border border-gray-300
  dark:border-white/10
  rounded-2xl sm:rounded-3xl
p-5 sm:p-6 lg:p-8
  shadow-2xl
  overflow-hidden
  transition-all duration-500
  hover:-translate-y-3
  md:hover:-translate-y-3
  hover:border-pink-500/40
  hover:bg-pink-100
dark:hover:bg-white/10"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 rounded-2xl transition"></div>

            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16
  flex items-center justify-center
  rounded-2xl
  bg-gradient-to-br
  from-pink-500/20
  to-purple-500/20
  border border-white/10
  text-2xl sm:text-3xl
  text-pink-400
  mb-6
  group-hover:scale-110
  transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="
text-xl sm:text-2xl
font-semibold
mb-3 sm:mb-4
text-gray-900 dark:text-white
">
              {service.title}
            </h3>

            {/* Description */}
            <ul className="
text-sm sm:text-[15px]
leading-6 sm:leading-7
text-gray-700 dark:text-gray-300
space-y-2
">
              {service.desc.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>

            {/* Bottom line animation */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-pink-400 group-hover:w-full transition-all duration-300"></div>

          </motion.div>
        ))}


      </div>

     </div>
    </div>

  );
};

export default Services;