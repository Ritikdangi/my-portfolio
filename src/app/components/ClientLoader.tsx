"use client";
import React, { useEffect, useState } from "react";

export default function ClientLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let loaded = false;
    const minShowMs = 600; // ensure loader shows at least this long
    const start = Date.now();

    function onDone() {
      if (loaded) return;
      loaded = true;
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minShowMs - elapsed);
      setTimeout(() => setVisible(false), wait);
    }

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        onDone();
      } else {
        window.addEventListener("load", onDone, { once: true });
        // also hide after a safe timeout in case load never fires
        const fallback = setTimeout(onDone, 3000);
        return () => {
          window.removeEventListener("load", onDone);
          clearTimeout(fallback);
        };
      }
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black text-white">
      <div className="flex items-center gap-6">
        <div className="flex items-end gap-2">
          <span className="loader-bar bg-white w-2 h-3 rounded-sm animate-loader-delay-0" />
          <span className="loader-bar bg-white w-2 h-3 rounded-sm animate-loader-delay-1" />
          <span className="loader-bar bg-white w-2 h-3 rounded-sm animate-loader-delay-2" />
        </div>
        <span className="text-lg font-medium">Loading…</span>
      </div>
    </div>
  );
}
