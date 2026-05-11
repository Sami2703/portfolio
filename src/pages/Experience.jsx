import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCode, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      icon: <FaReact />,
      company: "Softgrowth Infotech",
      duration: "Jan 2024 – Present",
      points: [
        "Reusable component ecosystems, reducing code duplication by 30%",
        "Implemented lazy loading and code splitting, decreasing initial page load time by 30%",
        "Boosted rendering performance using React.memo, useMemo, and useCallback",
        "Designed scalable state management architecture using Redux Toolkit",
        "Integrated multiple REST APIs with robust error handling and loading states",
        "Improved Core Web Vitals (LCP, CLS), enhancing overall user experience and performance scores",
        "Built secure authentication flows using JWT and role-based access control (RBAC)",
        "Executed CI/CD pipelines with GitHub Actions, enabling faster and reliable deployments",
        "Collaborated in Agile teams to deliver features on time with production-level quality",
      ],
    },
    {
      role: "UI Developer",
      icon: <FaLaptopCode />,
      company: "Softgrowth Infotech",
      duration: "Jan 2023 – Dec 2023",
      points: [
        "Developed responsive, cross-browser compatible UI components using HTML5, CSS3, JavaScript, Tailwind CSS, and Bootstrap",
        "Converted Figma designs into production-ready UI, reducing inconsistencies by 30%",
        "Strengthened accessibility compliance using ARIA roles and semantic HTML practices",
        "Refined UI responsiveness by optimizing DOM structure and rendering flow",
        "Elevated user engagement through dynamic, accessible interaction patterns",
      ],
    },
    {
      role: "Project Trainee Intern",
      icon: <FaCode />,
      company: "Maharashtra Knowledge Corporation Limited (MKCL)",
      duration: "Mar 2022 – Sept 2022",
      points: [
        "Constructed reusable UI components for ERA LMS using Vue.js, GoLang and MongoDB",
        "Enabled search, pagination, and data export (Excel/PDF) features",
        "Created JWT-based authentication system for secure access control",
        "Standardized media upload workflows, improving usability and reliability",
        "Worked with MongoDB for data retrieval and reporting",
      ],
    },
  ];

  return (
    <div className="
  relative min-h-screen overflow-hidden

  bg-white text-black

  dark:bg-gradient-to-br
  dark:from-[#0f172a]
  dark:via-[#111827]
  dark:to-[#1e293b]

  dark:text-white

  px-6 md:px-16 py-20
">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-100 h-150 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-120 h-100 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        {/* Subtitle */}
        <p className="
text-center
text-gray-700 dark:text-gray-400
max-w-3xl mx-auto
mb-20 leading-7
">
          My professional journey focused on building scalable frontend
          applications, optimizing performance, and delivering modern user
          experiences using React.js and full-stack technologies.
        </p>

        {/* Timeline */}
        <div className="
relative
border-l border-pink-500/30
dark:border-pink-500/20
pl-8 md:pl-12
space-y-14
">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
              }}
              className="relative"
            >

              {/* Timeline Dot */}
              <div className="absolute
    -top-6
    left-8
    w-14
    h-14
    rounded-2xl
    bg-gradient-to-br
    from-pink-500
    via-purple-500
    to-cyan-500
    flex
    items-center
    justify-center
    shadow-2xl
    ring-4
    ring-white dark:ring-[#111827]
    z-20">
                {/* <FaBriefcase className="text-white text-xl" /> */}
                {exp.icon}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  relative
                  bg-gray-100
  dark:bg-[#111827]

  rounded-3xl
  pt-14 pb-8 px-8

  border
  border-gray-300
  dark:border-white/5
                  border-l-4
                  border-l-pink-500
                  shadow-2xl
                  overflow-hidden
                  hover:border-pink-500/30
                  transition-all
                  duration-500
                "
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5"></div>

                {/* Content */}
                <div className="relative z-10">

                  {/* Role */}
                  <h3 className="
text-2xl font-bold
text-gray-900 dark:text-white
">
                    {exp.role}
                  </h3>

                  {/* Company + Duration */}
                  <div className="flex flex-wrap items-center gap-3 mt-4">

                    <span className="
px-4 py-1.5 text-sm rounded-full

bg-pink-100 dark:bg-pink-500/10

text-pink-600 dark:text-pink-400

border border-pink-300
dark:border-pink-500/20
">
                      {exp.company}
                    </span>

                    <span className="
text-sm
text-gray-600 dark:text-gray-400
">
                      {exp.duration}
                    </span>

                  </div>

                  {/* Points */}
                  <ul className="mt-6 space-y-4">

                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="
flex gap-3
text-gray-700 dark:text-gray-300
leading-7
"
                      >
                        <span className="text-pink-400 mt-1">
                          ▹
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Experience;