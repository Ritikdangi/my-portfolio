"use client";
import React from "react";
import { motion } from "framer-motion";
import { container, item } from "./Hero";
import { AnimatedReveal } from "./AnimatedCard"; // renamed and reused
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaDocker, FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiC, SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={80} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={80} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare size={80} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={80} className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={80} className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript size={80} className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={80} className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={80} className="text-green-500" /> },
  { name: "Database", icon: <FaDatabase size={80} className="text-purple-500" /> },
  { name: "GitHub", icon: <FaGithub size={80} className="text-gray-200" /> },
  { name: "Git", icon: <FaGitAlt size={80} className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker size={80} className="text-blue-400" /> },
  { name: "C", icon: <SiC size={80} className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus size={80} className="text-blue-600" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-16">
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-32 xl:px-48 flex flex-col"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        {/* Title */}
        <motion.div
          className="flex items-center mb-6"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          <h2 className="text-2xl pb-1.5 bg-gradient-to-r tracking-wide leading-loose from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            &lt;/Skills&gt;
          </h2>
          <div className="ml-2 w-[60%] sm:w-[60%] md:w-[60%] lg:w-[50%] h-[1px] bg-gradient-to-r from-cyan-400 to-pink-400" />
        </motion.div>

        {/* Sub-heading */}
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-gray-200"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          TECH STACK
        </motion.h3>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 justify-center">
          {skills.map((skill, i) => (
            <AnimatedReveal
              key={skill.name + i}
              type="card"
              className="relative flex items-center justify-center
                w-40 h-40 md:w-44 md:h-44
                rounded-[30px] border border-[var(--tech-stack-box-border-color)]
                backdrop-blur-xl
                shadow-[0_8px_24px_rgba(0,0,0,0.7)]
                transition-all duration-300 group
                hover:scale-105 hover:shadow-[0_12px_32px_rgba(0,0,0,0.8)]
                [--tw-bg-opacity:0.6] [--tw-border-opacity:0.2]"
            >
              <div className="absolute top-1 px-2 py-1 bg-[#0f1114]/70 border border-white/10 rounded-md text-xs text-gray-200
                opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300 ease-out">
                {skill.name}
              </div>
              <div className="flex items-center justify-center w-full h-full scale-150">
                {skill.icon}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
}