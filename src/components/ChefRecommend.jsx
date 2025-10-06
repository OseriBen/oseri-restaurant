import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import menuImage from "../assets/food4.png";

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      className="px-8 md:px-16 py-20 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h3
          className="text-4xl md:text-5xl font-bold underline decoration-orange-400 decoration-2 underline-offset-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Today's Specials
        </h3>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Chef Recommended</h2>

          <ul className="space-y-6">
            {[
              {
                name: "GARLIC SHRIMP & TONNARELLI PASTA",
                price: "$19.99",
                desc: "Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce",
              },
              {
                name: "GRILLED HANGER STEAK",
                price: "$25.50",
                desc: "Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce",
              },
              {
                name: "PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI",
                price: "$15.50",
                desc: "Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce",
              },
              {
                name: "GRILLED FREE RANGE CHICKEN SALAD",
                price: "$19.99",
                desc: "Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers",
              },
              {
                name: "GRILLED BBQ BABY BACK RIBS",
                price: "$23.00",
                desc: "Hibiscus sweet ranch coleslaw, hand cut fries",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariant}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-1"
              >
                <div className="flex justify-between font-semibold">
                  <p className="text-gray-900">{item.name}</p>
                  <span className="text-orange-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={menuImage}
            alt="Menu"
            className="max-w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
