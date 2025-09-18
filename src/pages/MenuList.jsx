// src/pages/MenuList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookTable from "../components/BookTable";
import menuBg from "../assets/bg-menu.jpg";

// Appetizers
import app1 from "../assets/app1.jpeg";
import app2 from "../assets/app2.jpg";
import app3 from "../assets/app3.jpg";
import app4 from "../assets/app4.jpg";
import app5 from "../assets/app5.jpg";
import app6 from "../assets/app6.jpg";
import app7 from "../assets/app7.jpg";
import app8 from "../assets/app8.jpg";

// Mains
import main1 from "../assets/main1.webp";
import main2 from "../assets/main2.webp";
import main3 from "../assets/main3.webp";
import main4 from "../assets/main4.webp";
import main5 from "../assets/main5.webp";
import main6 from "../assets/main6.webp";
import main7 from "../assets/main7.webp";
import main8 from "../assets/main8.webp";

// Desserts
import dess1 from "../assets/dess1.webp";
import dess2 from "../assets/dess2.webp";
import dess3 from "../assets/dess3.webp";
import dess4 from "../assets/dess4.webp";
import dess5 from "../assets/dess5.webp";
import dess6 from "../assets/dess6.webp";
import dess7 from "../assets/dess7.webp";
import dess8 from "../assets/dess8.webp";

export default function MenuList() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qty: 1,
    payment: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const appetizers = [
    { id: "app-1", name: "Appetizer 1", type: "Starter", price: 12, image: app1 },
    { id: "app-2", name: "Appetizer 2", type: "Starter", price: 14, image: app2 },
    { id: "app-3", name: "Appetizer 3", type: "Starter", price: 16, image: app3 },
    { id: "app-4", name: "Appetizer 4", type: "Starter", price: 18, image: app4 },
    { id: "app-5", name: "Appetizer 5", type: "Starter", price: 20, image: app5 },
    { id: "app-6", name: "Appetizer 6", type: "Starter", price: 22, image: app6 },
    { id: "app-7", name: "Appetizer 7", type: "Starter", price: 24, image: app7 },
    { id: "app-8", name: "Appetizer 8", type: "Starter", price: 26, image: app8 },
  ];

  const mains = [
    { id: "main-1", name: "Main Dish 1", type: "Main Course", price: 25, image: main1 },
    { id: "main-2", name: "Main Dish 2", type: "Main Course", price: 28, image: main2 },
    { id: "main-3", name: "Main Dish 3", type: "Main Course", price: 31, image: main3 },
    { id: "main-4", name: "Main Dish 4", type: "Main Course", price: 34, image: main4 },
    { id: "main-5", name: "Main Dish 5", type: "Main Course", price: 37, image: main5 },
    { id: "main-6", name: "Main Dish 6", type: "Main Course", price: 40, image: main6 },
    { id: "main-7", name: "Main Dish 7", type: "Main Course", price: 43, image: main7 },
    { id: "main-8", name: "Main Dish 8", type: "Main Course", price: 46, image: main8 },
  ];

  const desserts = [
    { id: "dess-1", name: "Dessert 1", type: "Sweet", price: 10, image: dess1 },
    { id: "dess-2", name: "Dessert 2", type: "Sweet", price: 12, image: dess2 },
    { id: "dess-3", name: "Dessert 3", type: "Sweet", price: 14, image: dess3 },
    { id: "dess-4", name: "Dessert 4", type: "Sweet", price: 16, image: dess4 },
    { id: "dess-5", name: "Dessert 5", type: "Sweet", price: 18, image: dess5 },
    { id: "dess-6", name: "Dessert 6", type: "Sweet", price: 20, image: dess6 },
    { id: "dess-7", name: "Dessert 7", type: "Sweet", price: 22, image: dess7 },
    { id: "dess-8", name: "Dessert 8", type: "Sweet", price: 24, image: dess8 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "qty") {
      setForm((s) => ({ ...s, qty: Math.max(1, Number(value || 1)) }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const handleOrder = (dish) => {
    setSelectedDish(dish);
    setConfirmed(false);
    setForm({ name: "", email: "", phone: "", qty: 1, payment: "" });
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
    setForm({ name: "", email: "", phone: "", qty: 1, payment: "" });
    setConfirmed(false);
  };

  const handlePlaceOrder = () => {
    setConfirmed(true);
  };

  const totalCost = selectedDish ? selectedDish.price * Number(form.qty || 1) : 0;

  const renderSection = (title, data) => (
    <div className="max-w-7xl mx-auto px-6 py-20 flex-grow">
      <h2
        className="text-3xl font-bold mb-10 text-center text-[#bfa37c]"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {title}
      </h2>

      {/* Grid styled like WineList */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((dish) => (
          <div
            key={dish.id}
            className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
          >
            {/* Image fills card */}
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-56 object-cover"
            />

            {/* Details */}
            <div className="p-6">
              <h3
                className="text-lg font-bold text-[#bfa37c] mb-2 uppercase tracking-wide"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {dish.name}
              </h3>
              <p className="italic text-gray-400">{dish.type}</p>
              <p className="text-lg font-semibold mb-6 text-white">
                ${dish.price} <span className="text-gray-500">/plate</span>
              </p>

              <button
                onClick={() => handleOrder(dish)}
                className="mt-auto border border-[#bfa37c] px-6 py-3 text-sm uppercase tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition"
              >
                + Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${menuBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1
            className="text-5xl md:text-6xl font-bold drop-shadow-lg text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Full Menu
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Explore appetizers, mains, and desserts crafted with passion.
          </p>
        </div>
      </section>

      {/* Sections */}
      {renderSection("Appetizers", appetizers)}
      {renderSection("Main Dishes", mains)}
      {renderSection("Desserts", desserts)}

      {/* Back to Home button */}
      <div className="text-center mb-12">
        <Link
          to="/"
          className="inline-block px-8 py-3 border border-[#bfa37c] text-[#bfa37c] uppercase tracking-wider hover:bg-[#bfa37c] hover:text-black transition"
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
      <BookTable />

      {/* Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-[#1a1a1a] border border-gray-700 p-10 rounded-lg w-full max-w-2xl relative text-white">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#bfa37c]"
            >
              ✕
            </button>

            {!confirmed ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-[#bfa37c]">
                  Order {selectedDish.name}
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent placeholder-gray-400 text-white border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-transparent placeholder-gray-400 text-white border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-transparent placeholder-gray-400 text-white border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />
                  <select
                    name="payment"
                    value={form.payment}
                    onChange={handleChange}
                    className="bg-transparent text-black border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  >
                    <option value="">Select Payment</option>
                    <option value="card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cash">Cash on Delivery</option>
                  </select>
                  <input
                    name="qty"
                    type="number"
                    min="1"
                    value={form.qty}
                    onChange={handleChange}
                    className="bg-transparent placeholder-gray-400 text-white border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />
                  <div className="flex items-center">
                    <span className="text-gray-300">Total: </span>
                    <span className="ml-2 text-orange-300 font-semibold">
                      ${totalCost}
                    </span>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <button
                    onClick={handlePlaceOrder}
                    className="px-8 py-3 border border-[#bfa37c] text-[#bfa37c] uppercase tracking-wider hover:bg-[#bfa37c] hover:text-black transition"
                  >
                    Place Order
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#bfa37c]">
                  Order Confirmed !!!
                </h2>
                <p>
                  Thank you{" "}
                  <span className="font-semibold">{form.name || "Guest"}</span>,
                  your order of <span className="font-semibold">{form.qty}</span>{" "}
                  {form.qty > 1 ? "dishes" : "dish"} of{" "}
                  <span className="font-semibold">{selectedDish.name}</span> has
                  been placed.
                </p>
                <p className="mt-2 text-orange-300 font-semibold">
                  Total Paid: ${totalCost}
                </p>

                <div className="mt-8">
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2 border border-[#bfa37c] text-[#bfa37c] uppercase tracking-wider hover:bg-[#bfa37c] hover:text-black transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
