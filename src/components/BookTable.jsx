import React from "react";

import bgImage from "../assets/bg-table.jpg"; 

export default function BookTable() {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay (covers whole section) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Reservation Form Section */}
        <div className="min-h-[100svh] flex flex-col justify-center items-center py-16 w-full">
          <div className="text-center mb-10">
            <h3 className="text-xl italic text-orange-300 mb-2">Reservations</h3>
            <h2 className="text-4xl font-bold tracking-wide text-white drop-shadow-lg">
              BOOK A TABLE
            </h2>
          </div>

          <form className="space-y-6 w-full max-w-xl text-white">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-white/70 focus:border-white p-2 outline-none bg-transparent placeholder-white/80"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border-b border-white/70 focus:border-white p-2 outline-none bg-transparent placeholder-white/80"
            />
            <input
              type="number"
              placeholder="Number of Persons"
              className="w-full border-b border-white/70 focus:border-white p-2 outline-none bg-transparent placeholder-white/80"
            />
            <input
              type="date"
              className="w-full border-b border-white/70 focus:border-white p-2 outline-none bg-transparent text-white"
            />
            <input
              type="time"
              className="w-full border-b border-white/70 focus:border-white p-2 outline-none bg-transparent text-white"
            />

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded transition"
            >
              BOOK A TABLE
            </button>
          </form>
        </div>

        
        <div className="text-gray-300 text-center px-6 py-12 w-full">
          <h2 className="text-2xl font-bold text-white mb-4">Oseri du Goût</h2>
          <p className="text-sm max-w-2xl mx-auto mb-8">
            The perfect place to enjoy authentic fine dining with a modern twist.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-2">Opening Hours</h3>
              <p>Mon - Sun / 12 am - 12 pm</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Contact</h3>
              <p>Phone: +234 814568263</p>
              <p>Email: OseriDuGoût@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Address</h3>
              <p>C Block 11/13 House</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <div className="border-t border-gray-500/50 pt-4">
            <p className="text-xs text-gray-300">
              © 2025 Oseri du Goût. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

