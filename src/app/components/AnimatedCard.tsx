"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { card, item } from "./Hero";

type VariantType = "card" | "item";

interface AnimatedRevealProps {
  children: React.ReactNode;
  type?: VariantType;
  className?: string;
}

export function AnimatedReveal({
  children,
  type = "item",
  className = "",
}: AnimatedRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    controls.start(inView ? "show" : "exit");
  }, [inView, controls]);

  const variant = type === "card" ? card : item;

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}