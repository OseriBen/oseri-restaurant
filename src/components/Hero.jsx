import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import heroVideo from "../assets/meal.mp4";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 py-32 overflow-hidden"
    >
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
        <motion.h1
          initial={{ opacity: 0, y: -60, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -60, scale: 0.95 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[32px] md:text-[40px] lg:text-[46px] font-extrabold leading-tight text-white tracking-tight drop-shadow-lg"
        >
          Oseri du <span className="text-orange-500">Goût</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-gray-200 text-xl italic font-serif leading-relaxed drop-shadow"
        >
          Chaque Bouchée, un Chef-d’Œuvre
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-gray-300 text-lg leading-relaxed drop-shadow max-w-lg"
        >
          Experience the joy of great food! Our dishes are crafted to perfection, 
          made with fresh ingredients, and served with a side of happiness. 
          Explore our menu and find your new favorite taste!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="flex gap-4 mt-8"
        >
          <button className="px-6 py-2.5 bg-white/90 text-gray-800 rounded-lg shadow hover:shadow-lg hover:-translate-y-0.5 transition font-medium">
            Make Reservation
          </button>
        </motion.div>
      </div>
    </section>
  );
}


