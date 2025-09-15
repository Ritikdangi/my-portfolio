"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  const bubbles = Array.from({ length: 1 });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {screenWidth > 0 &&
        bubbles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-3xl"
            initial={{ y: "100vh", x: Math.random() * screenWidth }}
            animate={{
              y: [-200, "50vh"],
              x: Math.random() * screenWidth,
            }}
            transition={{
              repeat: Infinity,
              duration: 15 + Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}
    </div>
  );
}
