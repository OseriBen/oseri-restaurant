import React from "react";
import { Link } from "react-router-dom";
import wineBg from "../assets/bg-wine.jpg";
import wine1 from "../assets/wine1.png";
import wine2 from "../assets/wine2.png";
import wine3 from "../assets/wine3.png";
import wine4 from "../assets/wine4.png";

export default function WineSection() {
  return (
    <section id="wines" className="relative">
      {/* Fixed background */}
      <div
        className="relative bg-cover bg-center bg-fixed min-h-[100vh] flex flex-col justify-center px-6 py-20"
        style={{ backgroundImage: `url(${wineBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
          {/* Heading */}
          <div className="text-center mb-12">
            <h3 className="text-xl italic text-orange-300 mb-2">
              Our Selection
            </h3>
            <h2 className="text-5xl font-bold tracking-wide drop-shadow-lg">
              Fine Wines
            </h2>
          </div>

          {/* Horizontal Scrollable Cards */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-8 pb-4">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg flex-shrink-0 w-72 flex flex-col items-center hover:scale-105 hover:bg-white/20 transition duration-300">
                <img
                  src={wine1}
                  alt="Wine 1"
                  className="h-40 mx-auto mb-4 object-contain"
                />
                <h4 className="text-2xl font-semibold mb-1">Château Margaux</h4>
                <p className="italic text-orange-200 mb-2">Red Wine</p>
                <p className="text-sm mb-4 text-center">
                  A refined Bordeaux with deep aromas of cassis and spice.
                </p>
                <p className="font-bold text-lg mt-auto">$120</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg flex-shrink-0 w-72 flex flex-col items-center hover:scale-105 hover:bg-white/20 transition duration-300">
                <img
                  src={wine2}
                  alt="Wine 2"
                  className="h-40 mx-auto mb-4 object-contain"
                />
                <h4 className="text-2xl font-semibold mb-1">Cloudy Bay</h4>
                <p className="italic text-orange-200 mb-2">White Wine</p>
                <p className="text-sm mb-4 text-center">
                  Crisp Sauvignon Blanc with notes of citrus and passionfruit.
                </p>
                <p className="font-bold text-lg mt-auto">$90</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg flex-shrink-0 w-72 flex flex-col items-center hover:scale-105 hover:bg-white/20 transition duration-300">
                <img
                  src={wine3}
                  alt="Wine 3"
                  className="h-40 mx-auto mb-4 object-contain"
                />
                <h4 className="text-2xl font-semibold mb-1">Moët & Chandon</h4>
                <p className="italic text-orange-200 mb-2">Sparkling</p>
                <p className="text-sm mb-4 text-center">
                  A luxurious champagne with delicate bubbles and rich flavor.
                </p>
                <p className="font-bold text-lg mt-auto">$150</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg flex-shrink-0 w-72 flex flex-col items-center hover:scale-105 hover:bg-white/20 transition duration-300">
                <img
                  src={wine4}
                  alt="Wine 4"
                  className="h-40 mx-auto mb-4 object-contain"
                />
                <h4 className="text-2xl font-semibold mb-1">Rosé d’Provence</h4>
                <p className="italic text-orange-200 mb-2">Rosé</p>
                <p className="text-sm mb-4 text-center">
                  Fresh, crisp rosé with notes of strawberry and peach.
                </p>
                <p className="font-bold text-lg mt-auto">$75</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-10">
            <Link
              to="/wines" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              See Full Wine List
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

