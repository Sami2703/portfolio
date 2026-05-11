import React from 'react'
// import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaAws,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiVuedotjs } from "react-icons/si";
import { SiRedux, SiTailwindcss, SiMui,SiReactquery, SiTypescript, SiNextdotjs, SiJira, SiAxios, SiVite, SiWebpack, SiBabel, SiNpm, SiVercel, SiExpress, SiMongodb, SiDjango, SiMysql } from "react-icons/si";

const Skills = () => {
    // const { projects, experience, technologies } = useSelector((s) => s.portfolio);

  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Vue", icon: <SiVuedotjs className="text-green-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Reactquery", icon: <SiReactquery className="text-red-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Axios", icon: <SiAxios className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "Vite", icon: <SiVite className="text-yellow-400 bg-purple-400" /> },
    { name: "Webpack", icon: <SiWebpack className="text-blue-300" /> },
    { name: "Babel", icon: <SiBabel className="text-yellow-300" /> },
    { name: "NPM", icon: <SiNpm className="text-white-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
    { name: "Nodejs", icon: <FaNodeJs className="text-green-300" /> },
    { name: "Expressjs", icon: <SiExpress className="text-black dark:text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-white-300 bg-blue-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-300" /> },
    { name: "Django", icon: <SiDjango className="text-black dark:text-white" /> },
    { name: "AWS", icon: <FaAws className="text-black dark:text-white" /> },
    { name: "Jira", icon: <SiJira className="text-blue-800" /> },

  ];

  return (
    <div>
      {/* <h2 className="text-3xl mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="p-4 bg-gray-100 rounded text-center">
            {skill}
          </div>
        ))}
      </div> */}

    <div className="
min-h-screen
bg-gray-100
dark:bg-[#0f172a]
text-black
dark:text-white
px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-16
">

      {/* 🔥 HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8 sm:mb-12"
      >
        My Skills
      </motion.h2>

      {/* 📊 STATS */}
      {/* <div className="grid grid-cols-3 gap-6 mb-12 text-center">
        {[
          { label: "Projects", value: projects },
          { label: "Experience", value: experience },
          { label: "Technologies", value: technologies },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-pink-400">
              {item.value}+
            </h3>
            <p className="text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div> */}

      {/* 🎯 SKILLS GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-5 md:gap-6 w-full">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.15,
              rotate: 3,
            }}

            className="
flex flex-col items-center justify-center
p-6
bg-white
dark:bg-[#1e293b]
border border-gray-300
dark:border-white/10
rounded-xl
shadow-lg
cursor-pointer
hover:bg-pink-100
dark:hover:bg-pink-500/20
transition
"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">{skill.icon}</div>
            <p className="text-xs sm:text-sm md:text-base text-center text-gray-800 dark:text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* 🔄 AUTO SCROLL SLIDER */}
      <div className="overflow-hidden mt-12 sm:mt-16 w-full">
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 11,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="text-2xl sm:text-3xl md:text-4xl">
              {skill.icon}
            </div>
          ))}
        </motion.div>
      </div>

    </div>

      {/* <div className="mt-8 flex gap-6">
        <div>Projects: {projects}+</div>
        <div>Experience: {experience}+</div>
        <div>Technologies: {technologies}+</div>
      </div> */}
    </div>
  )
}

export default Skills