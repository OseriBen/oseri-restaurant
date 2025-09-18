import React from "react";
import { Link } from "react-router-dom";

export default function Dinner() {
  return (
    <section className="bg-[#111] text-white py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h3
          className="text-4xl md:text-5xl font-bold underline decoration-orange-400 decoration-2 underline-offset-8 mb-16"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Our Menu
        </h3>

        {/* Two-Column Layout (Appetizers + Main Course) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
          {/* Appetizers */}
          <div>
            <h4
              className="text-2xl font-semibold mb-10 text-center md:text-left"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Appetizers
            </h4>
            <ul className="space-y-8">
              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Bruschetta</span>
                <span className="text-orange-400">$12.00</span>
              </li>
              <p className="text-gray-400 text-sm">
                Grilled bread, garlic, tomatoes, basil, olive oil.
              </p>

              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Stuffed Mushrooms</span>
                <span className="text-orange-400">$14.50</span>
              </li>
              <p className="text-gray-400 text-sm">
                Mushrooms filled with cheese, garlic, and herbs.
              </p>

              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Shrimp Cocktail</span>
                <span className="text-orange-400">$16.00</span>
              </li>
              <p className="text-gray-400 text-sm">
                Chilled shrimp served with cocktail sauce.
              </p>

              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Caprese Salad</span>
                <span className="text-orange-400">$13.00</span>
              </li>
              <p className="text-gray-400 text-sm">
                Fresh mozzarella, tomatoes, basil, balsamic glaze.
              </p>
            </ul>
          </div>

          {/* Main Course */}
          <div>
            <h4
              className="text-2xl font-semibold mb-10 text-center md:text-left"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Main Course
            </h4>
            <ul className="space-y-8">
              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Filet Mignon</span>
                <span className="text-orange-400">$40.00</span>
              </li>
              <p className="text-gray-400 text-sm">
                Grilled tenderloin with garlic butter and herbs.
              </p>

              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Seafood Risotto</span>
                <span className="text-orange-400">$28.00</span>
              </li>
              <p className="text-gray-400 text-sm">
                Creamy risotto with shrimp, scallops, and saffron.
              </p>

              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Roasted Duck Breast</span>
                <span className="text-orange-400">$32.00</span>
              </li>
              <p className="text-gray-400 text-sm">
                Duck breast with orange glaze and vegetables.
              </p>

              <li className="flex justify-between border-b border-dotted border-gray-500 pb-2">
                <span className="font-semibold">Lobster Tail</span>
                <span className="text-orange-400">$45.00</span>
              </li>
              <p className="text-gray-400 text-sm">
                Butter-poached lobster with lemon sauce.
              </p>
            </ul>
          </div>
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
          <Link
            to="/menu" // navigates to MenuList page
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}
