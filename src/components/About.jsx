import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-white text-gray-900 py-32 px-8 md:px-20 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto text-center space-y-8">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold underline decoration-orange-500 decoration-2 underline-offset-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          About Us
        </motion.h3>

        {/* Sub Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold leading-snug"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          The best place to eat is where{" "}
          <span className="text-orange-500">the chef loves to cook</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
          className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto"
        >
          Welcome to{" "}
          <span className="text-orange-600 font-semibold">Oseri du Goût</span>, where our passion
          for <em>haute cuisine</em> is at the heart of everything we do. Our chef de cuisine,
          driven by an unwavering commitment to{" "}
          <span className="italic">savoir-faire</span>, curates a menu that celebrates the finest
          terroir. Every plate is a work of artisanal perfection, a unique{" "}
          <span className="text-orange-600">tour de force</span> designed to transport you. This is
          the art of dining — elevated.
        </motion.p>
      </div>
    </section>
  );
}


