// src/components/Loader.jsx
import React from "react";
import giffy from "../assets/giffy.gif"; 

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      {/* Loader GIF */}
      <img
        src={giffy}
        alt="Loading..."
        className="w-32 h-32 object-contain mb-6"
      />

      {/* Optional text */}
      <p className="text-[#bfa37c] tracking-widest font-semibold text-lg animate-pulse">
        Loading...
      </p>
    </div>
  );
}
