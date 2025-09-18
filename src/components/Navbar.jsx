import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // ✅ React Router navigation

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-colors duration-300">
      <nav className="flex justify-center px-4 md:px-8 py-2">
        <div
          className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full
            backdrop-blur-md acrylic transition-colors duration-300
            ${
              scrolled
                ? "bg-white/80 shadow-lg border border-gray-300/30"
                : "bg-white/30 border border-white/20"
            }`}
        >
          {/* ✅ Logo now links to Home page */}
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tight text-black cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Oseri du Goût<span className="text-orange-500">.</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-black">
            {/* ✅ Home now navigates to / */}
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
            </li>

            <li
              onClick={() => {
                const section = document.getElementById("about");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              About
            </li>

            <li>
              <Link
                to="/wines"
                className="hover:text-orange-500 transition-colors"
              >
                Wine
              </Link>
            </li>

            <li>
              <Link
                to="/menu"
                className="hover:text-orange-500 transition-colors"
              >
                Menu
              </Link>
            </li>

            <li
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              Contact
            </li>
          </ul>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-200/70 hover:scale-105 transition"
          >
            {menuOpen ? (
              <XMarkIcon className="h-5 w-5 text-black" />
            ) : (
              <Bars3Icon className="h-5 w-5 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full px-4 md:hidden z-50">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-lg p-6 border border-white/20">
            <ul className="flex flex-col space-y-4 text-black text-base font-medium">
              {/* ✅ Mobile Home now navigates to / */}
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li
                onClick={() => {
                  const section = document.getElementById("about");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="hover:text-orange-500 cursor-pointer"
              >
                About
              </li>

              <li>
                <Link
                  to="/wines"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Wine
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>

              <li
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="hover:text-orange-500 cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
