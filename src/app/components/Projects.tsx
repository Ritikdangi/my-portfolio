"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedReveal } from "./AnimatedCard";
import { FaGithub } from "react-icons/fa";
import { container, item } from "./Hero";

const projects = [
  {
    title: "StayTale",
    description:
      "Full‑stack hotel booking platform (React, Tailwind, Express, MongoDB). Bookings, mock payments, search & filters.",
  image: "/projects/staytale.webp",
    live: "https://staytale-clean.vercel.app/",
    repo: "https://github.com/Ritikdangi/staytale-clean",
  },
  {
    title: "MockMentor",
    description:
      "AI interview platform (Next.js, Tailwind, PostgreSQL). Voice recording & AI feedback • Role-based interview flows • Performance analytics to track progress.",
  image: "/projects/mockmentor.webp",
    live: "https://mock-mentor-five.vercel.app/",
    repo: "https://github.com/Ritikdangi/MockMentor",
  },
  {
    title: "MailForge",
    description:
      "Backend-first newsletter SaaS (Express, microservices, Docker, RabbitMQ). Modular services for templates, subscribers, campaigns and delivery.",
    image: "/projects/mailforge.svg",
    live: "#",
    repo: "https://github.com/Ritikdangi/newsletter-saas",
  },
  {
    title: "Let'sTalk",
    description:
      "Real-time chat platform (React, Tailwind, Socket.io). One-to-one messaging, online/offline status, and typing indicators for smooth conversations.",
  image: "/projects/letstalk.webp",
    live: "https://letstalkfrontend-wheat.vercel.app/login",
    repo: "https://github.com/Ritikdangi/Let-s-talk",
  },
  {
    title: "NoteNest",
    description:
      "Full-stack note-taking app (React, Vite, Tailwind). OTP authentication, Google OAuth and a minimal dashboard designed for fast note creation.",
  image: "/projects/notesync.webp",
    live: "https://note-taking-application-sigma.vercel.app/signin",
    repo: "https://github.com/Ritikdangi/note-taking-application",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-16 overflow-x-hidden">
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-32 xl:px-48 flex flex-col gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.div className="flex items-center mb-6" variants={item}>
          <h2 className="text-2xl pb-1.5 bg-gradient-to-r tracking-wide leading-loose from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            &lt;/Projects&gt;
          </h2>
          <div className="ml-2 w-[60%] sm:w-[60%] md:w-[60%] lg:w-[50%] h-[1px] bg-gradient-to-r from-cyan-400 to-pink-400" />
        </motion.div>

        {projects.map((p, idx) => (
          <AnimatedReveal
            key={p.title + idx}
            type="card"
            className={
              "w-full rounded-[40px] p-8 sm:p-10 lg:py-12 lg:min-h-[360px] bg-gradient-to-br from-[#0b0c12] via-[#0f1220] to-[#121222] border border-[var(--tech-stack-box-border-color)] shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden relative " +
              "flex flex-col-reverse lg:flex-row items-center gap-8 lg:pr-8"
            }
          >
            {/* Left: text */}
            <div className="w-full lg:w-1/2 pr-6">
              <h3 className="text-4xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-[56ch] text-sm sm:text-base">{p.description}</p>

              <div className="flex items-center gap-4 mt-2">
                  {p.title === "MailForge" ? (
                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      className="group relative inline-flex items-center overflow-hidden rounded-full text-black shadow-md"
                    >
                      {/* expanding gradient backdrop (single) */}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[220px] h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full origin-left transform-gpu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-10" />

                      {/* label on top */}
                      <span className="relative z-20 px-5 py-2 text-sm font-medium text-white">Live view →</span>
                    </button>
                  ) : (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex items-center overflow-hidden rounded-full text-black shadow-md"
                    >
                      {/* expanding gradient backdrop (single) */}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[220px] h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full origin-left transform-gpu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-10" />

                      {/* label on top */}
                      <span className="relative z-20 px-5 py-2 text-sm font-medium text-white">Live view →</span>
                    </a>
                  )}

                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-purple-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                  <span className="relative text-white flex items-center justify-center">
                    <FaGithub />
                  </span>
                </a>
              </div>
            </div>

            {/* Right column (text occupies left; image floated via absolute on lg) */}
            <div className="w-full lg:w-1/2">
              {/* small screens: inline framed image */}
              <div className="block lg:hidden w-full flex items-center justify-center">
                <div className="bg-white rounded-none rounded-tl-[40px] overflow-hidden border border-gray-100 shadow-inner w-full max-w-[520px]">
                  <Image src={p.image} alt={p.title} width={520} height={320} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>

            {/* absolute screenshot placed relative to card wrapper so it aligns with the inner bottom-right border */}
            <div
              className="hidden lg:block absolute right-0 bottom-0 w-[50%] max-w-[560px] rounded-none rounded-tl-[40px] overflow-hidden bg-white shadow-xl z-40"
              style={{ top: "5.5rem" }}
            >
              <Image src={p.image} alt={p.title} width={560} height={360} className="w-full h-full object-cover" />
            </div>
          </AnimatedReveal>
        ))}
      </motion.div>
    </section>
  );
}
