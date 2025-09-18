import React from "react";

export default function About() {
  return (
    <section className="bg-white text-gray-900 py-32 px-8 md:px-20 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto text-center space-y-8">
        
        {/* Section Title */}
        <h3
          className="text-4xl md:text-5xl font-bold underline decoration-orange-500 decoration-2 underline-offset-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          About Us
        </h3>

        {/* Sub Heading */}
        <h2
          className="text-2xl md:text-3xl font-semibold leading-snug"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          The best place to eat is where{" "}
          <span className="text-orange-500">the chef loves to cook</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
          Welcome to <span className="text-orange-600 font-semibold">Oseri du Goût</span>, 
          where our passion for <em>haute cuisine</em> is at the heart of everything we do. 
          Our chef de cuisine, driven by an unwavering commitment to{" "}
          <span className="italic">savoir-faire</span>, curates a menu that celebrates 
          the finest terroir. Every plate is a work of artisanal perfection, a unique{" "}
          <span className="text-orange-600">tour de force</span> designed to transport you. 
          This is the art of dining — elevated.
        </p>

      </div>
    </section>
  );
}


