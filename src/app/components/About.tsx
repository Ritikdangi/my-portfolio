"use client";
import React from "react";
import { motion } from "framer-motion";
import { container } from "./Hero";
import { AnimatedReveal } from "./AnimatedCard"; 
import { DownloadCloud } from "lucide-react";

function About() {
  return (
    <section id="about" className="relative min-h-screen py-12 flex items-center overflow-hidden">
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 mt-5 sm:px-10 lg:px-32 xl:px-48 flex flex-col lg:flex-row items-center lg:items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Content */}
        <AnimatedReveal className="w-full lg:w-3/5">
          <div className="flex items-center mb-5">
            <h2 className="text-2xl pb-1.5 bg-gradient-to-r tracking-wide leading-loose from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              &lt;/AboutMe&gt;
            </h2>
            <div className="ml-2 w-[50%] sm:w-[51%] md:w-[55%] lg:w-[83%] h-[1px] bg-gradient-to-r from-cyan-400 to-pink-400" />
          </div>

          <p className="mt-3 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            Hi, I’m Ritik. I’m a Full-Stack Developer passionate about turning ideas into scalable, user-friendly web applications. I enjoy working across the stack — from designing clean, responsive interfaces to building robust backend systems.
          </p>

          <p className="mt-3 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            My journey into web development began with curiosity about how the web works, and over time it’s grown into a strong interest in creating products that are not only functional but also impactful.
          </p>

          <p className="mt-3 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            These days, my focus is on creating scalable web apps, crafting clean user experiences, and exploring modern web technologies.
          </p>

          <div className="mt-6">
            <a
                href="https://drive.google.com/file/d/1MNHwZsPvbs7jLQBK_b9wx1matc-L2hx6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center overflow-hidden rounded-full bg-gradient-to-r from-pink-400 to-purple-600 text-white shadow-lg transition-all duration-500 hover:pr-6 w-12 h-12 hover:w-36"
              >
                <span className="flex items-center justify-center w-12 h-12">
                  <DownloadCloud size={22} />
                </span>
                <span className="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-medium">
                  Resume
                </span>
              </a>
          </div>
        </AnimatedReveal>

        {/* Right Side Image */}
        <AnimatedReveal className="w-full lg:w-2/5 flex justify-center pt-20 lg:justify-end">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg w-64 h-72 object-cover"
          />
        </AnimatedReveal>
      </motion.div>
    </section>
  );
}

export default About;