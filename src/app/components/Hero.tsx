"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-[#151524] flex items-center justify-between 
                 px-6 sm:px-10 lg:px-32 xl:px-48 text-white overflow-hidden"
    >
      {/* Left Content */}
      <div className="max-w-2xl z-10 flex flex-col items-start ">
        <motion.h2
          className="text-3xl mb-2 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Namaste(); I'm
        </motion.h2>

        {/* Bigger main heading */}
        <h1 className="text-6xl mx-[-1] sm:text-7xl lg:text-8xl font-bold gradient-text leading-tight">
          Ritik Dangi.
        </h1>

        {/* Bigger tagline */}
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white hover-shake">
          I design, build & scale for the web
        </h2>

        <p className="mt-6 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
          Full Stack Developer with experience in modern web apps, scalable
          back-end systems, and clean UI/UX. I value simple structures,
          efficient code, and impactful digital products.
        </p>

        <motion.a
          href="#contact"
          className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 
                     text-white rounded-xl font-semibold text-lg shadow-lg hover:opacity-90"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let’s Talk!
        </motion.a>
      </div>

      {/* Right-side Huge Gradient Circle */}
      <motion.div
        className="hidden lg:block absolute right-0 top-1/2
                   w-[700px] h-[900px] xl:w-[1100px] xl:h-[1100px] rounded-full
                   bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500
                   opacity-30 blur-[180px]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.15, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: "translate(60%, -55%)",
        }}
        transformTemplate={({ scale }) =>
          `translate(60%, -55%) scale(${scale})`
        }
      />
    </section>
  );
}
