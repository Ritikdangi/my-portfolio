"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { container, item } from "./Hero";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const NAV_ITEMS: { id: string; label: string }[] = [
  { id: "home", label: "</Home>" },
  { id: "about", label: "</AboutMe>" },
  { id: "skills", label: "</Skills>" },
  { id: "projects", label: "</Projects>" },
  { id: "contact", label: "</Contact>" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    // IntersectionObserver for accessibility/initial marking
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting && e.intersectionRatio > 0);
        if (visible.length) {
          const best = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          setActive(best.target.id);
          return;
        }
      },
      { root: null, rootMargin: "-30% 0px -30% 0px", threshold: [0.15, 0.4, 0.6] }
    );

    sections.forEach((s) => obs.observe(s));

    // Scroll-based fallback (rAF) — pick the section whose center is nearest the viewport center
    let ticking = false;
    const center = () => window.innerHeight / 2;

    function updateActiveByScroll() {
      ticking = false;
      const c = center();
      let best: HTMLElement | null = null;
      let minDist = Infinity;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - c);
        if (dist < minDist) {
          minDist = dist;
          best = s;
        }
      }
      if (best) setActive(best.id);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveByScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // run once to initialize
    updateActiveByScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    // if mobile menu is open, close it first for snappy UX
    if (mobileOpen) setMobileOpen(false);

    // small delay so close feels immediate, then navigate
    window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        history.replaceState(null, "", `#${id}`);
      } catch {
        window.location.hash = `#${id}`;
      }
      setActive(id);
    }, 120);
  }

  // lock body scroll while mobile menu open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 
                 w-[95%] sm:w-[90%] lg:w-[80%] 
                 rounded-full  backdrop-blur-lg border border-white/20 shadow-lg 
                 px-4 sm:px-6 py-3 z-50"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Avatar / Logo */}
        <motion.div variants={item} className="flex items-end gap-2 h-full">
          <div className="h-10 sm:h-12 relative w-10 sm:w-12">
            <Image src="/avatar.webp" alt="logo" fill className="object-contain" />
          </div>
        </motion.div>

        {/* Nav Links */}
        <motion.ul className="hidden sm:flex gap-6 md:gap-8 text-white font-mono text-xs sm:text-sm" variants={container} initial="hidden" animate="show">
          {NAV_ITEMS.map((n) => (
            <motion.li key={n.id} variants={item} className="relative">
              <button
                onClick={() => handleClick(n.id)}
                className={`flex items-center gap-2 transition-colors ${active === n.id ? "text-purple-300" : "text-white/90"}`}
              >
                <span className={`w-2 h-2 rounded-full ${active === n.id ? "bg-purple-400" : "bg-transparent border border-white/20"}`} />
                <span className="whitespace-nowrap">{n.label}</span>
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md bg-white/5 border border-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M4 7H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile full-screen nav */}
      {mobileOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[9999]">
              {/* Solid overlay that hides page content */}
              <div className="w-full h-full bg-[#0b0c12] text-white flex flex-col items-center overflow-hidden">
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/6 border border-white/10 z-60"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="flex-1 flex flex-col items-center justify-center w-full px-6">
                  <nav className="flex flex-col items-center gap-12 w-full max-w-md">
                    {NAV_ITEMS.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => handleClick(n.id)}
                        className={`w-full flex items-center justify-center gap-4 text-2xl sm:text-3xl font-semibold transition-colors ${active === n.id ? "text-purple-300" : "text-white/80"}`}
                      >
                        <span className={`w-4 h-4 rounded-full ${active === n.id ? "bg-purple-400" : "bg-transparent border border-white/20"}`} />
                        <span>{n.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="pb-10 text-gray-400 text-sm">© 2025 Ritik Dangi</div>
              </div>
            </div>,
            document.body
          )
        : null}
    </motion.nav>
  );
}
