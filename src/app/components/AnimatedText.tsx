"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text }: { text: string }) {
  return (
    <h1 className="text-6xl font-extrabold text-white flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ y: -10, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}
