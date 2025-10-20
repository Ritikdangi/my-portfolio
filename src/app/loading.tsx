"use client";
import React from "react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0b0a10] to-[#151524]"
    >
      <div className="text-center px-6">
        <div className="mx-auto w-44 h-44 rounded-lg shadow-2xl flex items-center justify-center bg-[#0f0c1a] border border-white/5">
          {/* Subtle logo mark — keep empty for now to avoid showing profile */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 opacity-90" />
        </div>

        <div className="mt-6 text-white text-base sm:text-lg font-medium">Loading…</div>

        <div className="mt-4 flex items-center justify-center">
          <span className="inline-block w-8 h-8 border-4 border-white/10 border-t-white rounded-full animate-spin" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
