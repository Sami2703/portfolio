import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {

  return (

    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-all duration-300">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/education" element={<Education />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div>
  );
}