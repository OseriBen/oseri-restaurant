import React from "react";
import menuImage from "../assets/food4.png";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <section className="px-8 md:px-16 py-20 max-w-6xl mx-auto px-6">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h3
          className="text-4xl md:text-5xl font-bold underline decoration-orange-400 decoration-2 underline-offset-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Today's Specials 
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Chef Recommended</h2>
          <ul className="space-y-6">
            <li>
              <div className="flex justify-between font-semibold">
                <p>GARLIC SHRIMP & TONNARELLI PASTA</p>
                <span className="text-orange-600">$19.99</span>
              </div>
              <p className="text-gray-600">
                Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce
              </p>
            </li>
            <li>
              <div className="flex justify-between font-semibold">
                <p>GRILLED HANGER STEAK</p>
                <span className="text-orange-600">$25.50</span>
              </div>
              <p className="text-gray-600">
                Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce
              </p>
            </li>
            <li>
              <div className="flex justify-between font-semibold">
                <p>PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI</p>
                <span className="text-orange-600">$15.50</span>
              </div>
              <p className="text-gray-600">
                Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce
              </p>
            </li>
            <li>
              <div className="flex justify-between font-semibold">
                <p>GRILLED FREE RANGE CHICKEN SALAD</p>
                <span className="text-orange-600">$19.99</span>
              </div>
              <p className="text-gray-600">
                Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato,
                cucumbers
              </p>
            </li>
            <li>
              <div className="flex justify-between font-semibold">
                <p>GRILLED BBQ BABY BACK RIBS</p>
                <span className="text-orange-600">$23.00</span>
              </div>
              <p className="text-gray-600">
                Hibiscus sweet ranch coleslaw, hand cut fries
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={menuImage}
            alt="Menu"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
