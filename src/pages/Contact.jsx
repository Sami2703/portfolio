import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import React, { useState } from "react";


const Contact = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Message Sent Successfully!");

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };


  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white px-4 sm:px-6 md:px-16 py-16 relative overflow-hidden">

    <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-pink-400 mb-6"
      >
        Let's Connect
      </motion.h2>

      <p className="text-center text-gray-400 mb-16 text-lg md:text-xl">
        Have a project in mind or want to collaborate?
      </p>


       {/* <section className="bg-[#0f0f0f] text-white min-h-screen flex items-center px-6 md:px-16"> */}

      <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto bg-white/5
                      backdrop-blur-xl
                      border border-white/10
                      rounded-3xl
                      shadow-2xl
                      p-8 md:p-14">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-gray-400 mb-2">CONTACT</p> */}

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Get in Touch
          </h1>

          <p className="text-gray-400 max-w-md mb-8">
            Feel free to reach out for collaboration, freelance work, or any opportunities.
            I'm always open to discussing new opportunities.
          </p>

          {/* SOCIALS */}
        <div className="flex flex-col gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/Sami2703"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-4 border border-gray-800 rounded-xl hover:border-white transition duration-300"
          >
            <FaGithub className="text-3xl mt-1 text-white" />

            <div>
              <h3 className="text-xl font-semibold text-white">
                GitHub
              </h3>

              <p className="text-gray-400 mt-2">
                Explore my projects, repositories, and development work.
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/samiksha-sapat-6ab056208"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-4 border border-gray-800 rounded-xl hover:border-blue-500 transition duration-300"
          >
            <FaLinkedin className="text-3xl mt-1 text-blue-400" />

            <div>
              <h3 className="text-xl font-semibold text-white">
                LinkedIn
              </h3>

              <p className="text-gray-400 mt-2">
                Connect professionally and discuss opportunities.
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:samikshasapat03@gmail.com"
            className="flex items-start gap-4 p-4 border border-gray-800 rounded-xl hover:border-pink-500 transition duration-300"
          >
            <FaEnvelope className="text-3xl mt-1 text-pink-400" />

            <div>
              <h3 className="text-xl font-semibold text-white">
                Email
              </h3>

              <p className="text-gray-400 mt-2">
                Send me an email regarding projects, freelance work, or hiring.
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918329886470"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-4 border border-gray-800 rounded-xl hover:border-green-500 transition duration-300"
          >
            <FaWhatsapp className="text-3xl mt-1 text-green-400" />

            <div>
              <h3 className="text-xl font-semibold text-white">
                WhatsApp
              </h3>

              <p className="text-gray-400 mt-2">
                Directly message me for quick communication.
              </p>
            </div>
          </a>

        </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8
                     bg-white/5
                     backdrop-blur-md
                     border border-white/10
                     rounded-2xl
                     p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full
                      bg-transparent
                      border-b border-gray-600
                      py-4
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-pink-400
                      transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full
                      bg-transparent
                      border-b border-gray-600
                      py-4
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-pink-400
                      transition-all duration-300"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full
                      bg-transparent
                      border-b border-gray-600
                      py-4
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-pink-400
                      transition-all duration-300"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Message"
            className="w-full
                      bg-transparent
                      border-b border-gray-600
                      py-4
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-pink-400
                      transition-all duration-300"
          ></textarea>

          <button
            type="submit"
            className=" w-full
                        mt-6
                        py-4
                        rounded-xl
                        bg-gradient-to-r
                        from-pink-500
                        to-purple-600
                        text-white
                        font-semibold
                        hover:scale-[1.02]
                        transition-all duration-300
                        shadow-lg"
          >
            Send Message →
          </button>
        </motion.form>

      </div>
    {/* </section> */}

      {/* 🔗 Sticky LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/samiksha-sapat-6ab056208"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-9999
                   bg-blue-600/80
                   backdrop-blur-md
                   p-4
                   rounded-full
                   shadow-2xl
                   hover:scale-110
                   hover:bg-blue-500
                   transition-all duration-300"
      >
        <FaLinkedin className="text-white text-xl" />
      </a>
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Contact;