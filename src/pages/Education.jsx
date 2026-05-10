import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      college:
        "Progressive Education Society's Modern College of Engineering",
      year: "2019 – 2022",
      location: "Pune, Maharashtra, India",
    },
    {
      degree: "Bachelor of Computer Science",
      college: "Janata Mahavidyalaya",
      year: "2016 – 2019",
      location: "Chandrapur, Maharashtra, India",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-16">

      {/* Background Glow */}
      <div className="absolute top-10 left-0 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 sm:mb-20 leading-7">
          Academic background focused on computer applications, software
          engineering, and modern web development technologies.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="
                group
                relative
                bg-[#111827]
                w-full
                min-h-[280px]
                rounded-3xl
                pt-14
                pb-6 sm:pb-8
                px-5 sm:px-8
                border
                border-white/5
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

              {/* Floating Icon */}
              <div
                className="
                  absolute
                  top-1
                  left-4
                  w-12 h-12 sm:w-14 sm:h-14
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
                  ring-[#111827]
                  z-20
                "
              >
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <FaGraduationCap className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10">

                {/* Degree */}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {edu.degree}
                </h3>

                {/* College */}
                <p className="text-sm sm:text-base text-gray-300 mt-4 leading-7">
                  {edu.college}
                </p>

                {/* Details */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">

                  {/* Year */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs sm:text-sm">
                    <FaCalendarAlt />
                    <span>{edu.year}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm">
                    <FaMapMarkerAlt />
                    <span>{edu.location}</span>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Education;