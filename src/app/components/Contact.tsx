"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const socialLinks = [
    { icon: <FaInstagram size={24} />, href: "https://www.instagram.com/ritik_dangiiiiiii/" },
    { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/ritik-dangi-8a1729171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaGithub size={24} />, href: "https://github.com/Ritikdangi" },
    { icon: <MdEmail size={24} />, href: "mailto:ritik.dangi.cse@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="relative w-full h-[100vh] bg-gradient-to-b from-black via-[#0d0d1a] to-purple-950 text-white px-4 sm:px-16 py-16  overflow-x-hidden overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 px-2"
        >
          {"\u201CBuilding, Learning, and Growing Every Day.\u201D"}
        </motion.h2>

        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-purple-400 text-lg font-mono mb-6"
        >
          GetInTouch();
        </motion.h3>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="relative flex items-center justify-center w-12 h-12 rounded-full border border-purple-500 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-purple-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              <span className="relative text-white">{link.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className=" absolute bottom-[0%] "
        >
          <Image
            src="/avatar.webp"
            alt="avatar"
            width={250}
            height={250}
            className="rounded-full"
          />
        </motion.div>

        {/* Footer */}
        <footer className=" absolute bottom-0 w-full text-sm sm:text-base text-gray-400 bg-black text-center border-t border-gray-700 py-5">
          Designed & Built by Ritik Dangi © 2025
        </footer>
      </div>
    </section>
  );
}

export default Contact;