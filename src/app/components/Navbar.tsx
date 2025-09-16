"use client";

import { motion } from "framer-motion";
import { container, item } from "./Hero";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 
                 w-[95%] sm:w-[90%] lg:w-[80%] 
                 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg 
                 px-4 sm:px-6 py-3 z-50"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Avatar / Logo */}
        <motion.div variants={item} className="flex items-center gap-2">
          <motion.img
            src="/avatar.png"
            alt="logo"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30"
          />
        </motion.div>

        {/* Nav Links */}
        <motion.ul
          className="hidden sm:flex gap-6 md:gap-8 text-white font-mono text-xs sm:text-sm"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={item}>
            <a href="#home" className="hover:text-purple-300">{"</Home>"}</a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#about" className="hover:text-purple-300">{"</AboutMe>"}</a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#skills" className="hover:text-purple-300">{"</Skills>"}</a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#projects" className="hover:text-purple-300">{"</Projects>"}</a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
}
