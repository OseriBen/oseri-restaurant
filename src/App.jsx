import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ChefRecommend from "./components/ChefRecommend";
import WineSection from "./components/WineSection";
import Dinner from "./components/Dinner";
import BookTable from "./components/BookTable";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader"; 

// Pages
import WineList from "./pages/WineList";
import MenuList from "./pages/MenuList";
import "./index.css";

// Home Page
function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen scroll-smooth transition-colors duration-500">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section>
        <ChefRecommend />
      </section>

      <section id="wine">
        <WineSection />
      </section>

      <section id="menu">
        <Dinner />
      </section>

      <section id="contact">
        <BookTable />
      </section>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; 

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wines" element={<WineList />} />
        <Route path="/menu" element={<MenuList />} />
      </Routes>
    </Router>
  );
}

export default App;
