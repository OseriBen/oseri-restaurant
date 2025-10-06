import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import wineBg from "../assets/bg-wine.jpg";
import wine1 from "../assets/wine1.png";
import wine2 from "../assets/wine2.png";
import wine3 from "../assets/wine3.png";
import wine4 from "../assets/wine4.png";

export default function WineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); 

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  const wines = [
    {
      img: wine1,
      title: "Château Margaux",
      type: "Red Wine",
      desc: "A refined Bordeaux with deep aromas of cassis and spice.",
      price: "$120",
    },
    {
      img: wine2,
      title: "Cloudy Bay",
      type: "White Wine",
      desc: "Crisp Sauvignon Blanc with notes of citrus and passionfruit.",
      price: "$90",
    },
    {
      img: wine3,
      title: "Moët & Chandon",
      type: "Sparkling",
      desc: "A luxurious champagne with delicate bubbles and rich flavor.",
      price: "$150",
    },
    {
      img: wine4,
      title: "Rosé d’Provence",
      type: "Rosé",
      desc: "Fresh, crisp rosé with notes of strawberry and peach.",
      price: "$75",
    },
  ];

  return (
    <section id="wines" ref={ref} className="relative overflow-hidden">
      {/* Background */}
      <div
        className="relative bg-cover bg-center bg-fixed min-h-[100vh] flex flex-col justify-center px-6 py-20"
        style={{ backgroundImage: `url(${wineBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
          {/* Title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h3 className="text-xl italic text-orange-300 mb-2">Our Selection</h3>
            <h2 className="text-5xl font-bold tracking-wide drop-shadow-lg">
              Fine Wines
            </h2>
          </motion.div>

          {/* Scrollable Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex space-x-8 pb-4">
              {wines.map((wine, i) => (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg flex-shrink-0 w-72 flex flex-col items-center 
                            hover:scale-105 hover:bg-white/20 transition duration-300"
                >
                  <motion.img
                    src={wine.img}
                    alt={wine.title}
                    className="h-40 mx-auto mb-4 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                  <h4 className="text-2xl font-semibold mb-1">{wine.title}</h4>
                  <p className="italic text-orange-200 mb-2">{wine.type}</p>
                  <p className="text-sm mb-4 text-center text-gray-200">
                    {wine.desc}
                  </p>
                  <p className="font-bold text-lg mt-auto text-orange-300">
                    {wine.price} <span className="text-sm text-gray-300">/bottle</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <Link
              to="/wines"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
            >
              See Full Wine List
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
