"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // reveal one by one
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const tagline = "I design, build & scale for the web".split(" ");

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-[#151524] flex items-center justify-between 
                 px-6 sm:px-10 lg:px-32 xl:px-48 text-white overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="max-w-2xl z-10 flex flex-col items-start"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2 className="text-3xl mb-2 font-mono" variants={item}>
          Namaste(); I'm
        </motion.h2>

        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text leading-tight"
          variants={item}
        >
          Ritik Dangi.
        </motion.h1>

        {/* Tagline with hover shake per letter */}
        <motion.h2
          className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-semibold text-white  flex flex-wrap gap-3"
          variants={item}
        >
          {tagline.map((word, i) => (
            <span key={i} className="flex">
              {word.split("").map((letter, j) => (
                <motion.span
                  key={j}
                  initial={{ scale: 1, rotate:0 }} // ensures normal state
                  animate={{ scale: 1 , rotate : 0}} // ensures it goes back to normal
                  whileHover={{ 
                    scale: [1, 1.3,1] ,
                    rotate : [0,5,-5,0]
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="inline-block hover:text-[#33a2e2]"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h2>

        <motion.p
          className="mt-6 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed"
          variants={item}
        >
          Full Stack Developer with experience in modern web apps, scalable
          back-end systems, and clean UI/UX. I value simple structures,
          efficient code, and impactful digital products.
        </motion.p>

        {/* button logic  */}
        <motion.div className="relative inline-block mt-10 " 
         variants= {item}>
        <motion.div
    className="absolute top-2 left-2 w-full h-full rounded-xl bg-purple-500 z-0"
    variants={{
      hidden: { opacity: 0, scale : 0 },
      show: { opacity: 1, scale: 1, },
    }}
  ></motion.div>

  {/* Top button */}
  <motion.a
    href="#contact"
    className="relative inline-block px-4 sm:px-8 md:px-12 lg:px-16 
               py-2 sm:py-3 bg-gradient-to-r from-blue-400 to-purple-400 
               text-black rounded-xl font-semibold text-base sm:text-lg md:text-xl lg:text-lg shadow-lg z-10"
    variants={{
      hidden: { opacity: 0, scale : 0 },
      show: { opacity: 1, scale: 1, },
    }}
    whileHover={{ x: -4, y: -4, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Let’s Talk!
  </motion.a>

  </motion.div>
  
      </motion.div>
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
