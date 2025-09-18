import React from "react";
import Navbar from "./Navbar";
import heroVideo from "../assets/meal.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 py-32 overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-28 px-6">
        <h1 className="text-[32px] md:text-[40px] lg:text-[46px] font-extrabold leading-tight text-white tracking-tight drop-shadow-lg">
          Oseri du <span className="text-orange-500">Goût</span>
        </h1>

        <p className="mt-4 text-gray-200 text-xl italic font-serif leading-relaxed drop-shadow">
          Chaque Bouchée, un Chef-d’Œuvre
        </p>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed drop-shadow max-w-lg">
          Experience the joy of great food! Our dishes are crafted to perfection, 
          made with fresh ingredients, and served with a side of happiness. 
          Explore our menu and find your new favorite taste!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-2.5 bg-white/90 text-gray-800 rounded-lg shadow hover:shadow-lg hover:-translate-y-0.5 transition font-medium">
            Make Reservation
          </button>
        </div>
      </div>
    </section>
  );
}

