"use client";

import AnimatedText from "./AnimatedText";
import Background from "./Background";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white px-6"
    >
      <Background />

      <motion.h2
        className="text-lg mb-4 font-mono"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Namaste(); I'm
      </motion.h2>

      <AnimatedText text="Ritik Dangi." />
      <AnimatedText text="I design, build & scale for the web" />

      <p className="max-w-xl mt-6 text-gray-300">
      Full Stack Developer with experience in modern web apps, scalable back-end systems, and clean UI/UX. I value simple structures, efficient code, and impactful digital products.
      </p>

      <motion.a
        href="#contact"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:opacity-90"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Let’s Talk!
      </motion.a>
    </section>
  );
}
