"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">MyPortfolio</h1>
        <div className="space-x-6">
          <Link href="#home" className="hover:text-blue-600">Home</Link>
          <Link href="#about" className="hover:text-blue-600">About</Link>
          <Link href="#projects" className="hover:text-blue-600">Projects</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
