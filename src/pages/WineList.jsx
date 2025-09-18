import React, { useState } from "react";
import BookTable from "../components/BookTable";
import Navbar from "../components/Navbar";
import wineBg from "../assets/bg-wine2.jpg";
import wine1 from "../assets/wine1.png";
import wine2 from "../assets/wine2.png";
import wine3 from "../assets/wine3.png";
import wine4 from "../assets/wine4.png";

const wines = [
  { id: 1, name: "Château Marg", type: "Red Wine", price: 120, image: wine1 },
  { id: 2, name: "Cloudy Bay", type: "White Wine", price: 90, image: wine2 },
  { id: 3, name: "Moët & Chandon", type: "Sparkling", price: 150, image: wine3 },
  { id: 4, name: "Rosé d’Provence", type: "Rosé", price: 75, image: wine4 },
  { id: 5, name: "Caber Sauvignon", type: "Red Wine", price: 110, image: wine1 },
  { id: 6, name: "Pinot Noir", type: "Red Wine", price: 95, image: wine2 },
  { id: 7, name: "Riesling", type: "White Wine", price: 85, image: wine3 },
  { id: 8, name: "Syrah", type: "Red Wine", price: 130, image: wine4 },
  { id: 9, name: "Chardonnay", type: "White Wine", price: 100, image: wine1 },
  { id: 10, name: "Sangiovese", type: "Red Wine", price: 105, image: wine2 },
  { id: 11, name: "Prosecco", type: "Sparkling", price: 80, image: wine3 },
  { id: 12, name: "Merlot", type: "Red Wine", price: 115, image: wine4 },
];

export default function WineList() {
  const [selectedWine, setSelectedWine] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bottles: 1,
    payment: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "bottles") {
      const num = Math.max(1, Number(value || 1));
      setForm((s) => ({ ...s, bottles: num }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const handleOrder = (wine) => {
    setSelectedWine(wine);
    setConfirmed(false);
    setForm({ name: "", email: "", phone: "", bottles: 1, payment: "" });
  };

  const handleCloseModal = () => {
    setSelectedWine(null);
    setForm({ name: "", email: "", phone: "", bottles: 1, payment: "" });
    setConfirmed(false);
  };

  const handlePlaceOrder = () => {
    setConfirmed(true);
  };

  const totalCost = selectedWine ? selectedWine.price * Number(form.bottles || 1) : 0;

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <Navbar variant="sticky" />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${wineBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#bfa37c] mb-4 uppercase tracking-wide">
            Oldest Wine Collection in Paris
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Handpicked vintages and contemporary gems — curated for refined palates.
          </p>
        </div>
      </section>

      {/* Wine Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-white">
          Explore Our Wine Selection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {wines.map((wine) => (
            <div
              key={wine.id}
              className="bg-[#111] border border-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col hover:border-[#bfa37c] transition"
            >
              {/* Wine Image */}
              <div className="w-full h-56 flex items-center justify-center bg-[#1a1a1a]">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Wine Details */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-medium text-[#bfa37c] mb-2 uppercase tracking-wide">
                  {wine.name}
                </h3>

                <p className="italic text-gray-400">{wine.type}</p>

                <p className="text-lg font-semibold mb-6 text-white">
                  ${wine.price}{" "}
                  <span className="text-gray-500 font-normal">/ Bottle</span>
                </p>

                <button
                  onClick={() => handleOrder(wine)}
                  className="mt-auto border border-[#bfa37c] px-6 py-3 text-sm uppercase tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition"
                >
                  + Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="border border-[#bfa37c] px-6 py-3 uppercase text-sm tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition rounded"
          >
            ← Back to Home
          </a>
        </div>
      </section>

      {/* Order Modal */}
      {selectedWine && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
          <div className="bg-[#111] text-white max-w-2xl w-full rounded-lg p-8 relative shadow-lg border border-[#bfa37c]">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✖
            </button>

            {!confirmed ? (
              <>
                <h2 className="text-2xl font-bold text-[#bfa37c] mb-6">
                  Order {selectedWine.name}
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />
                  <select
                    name="payment"
                    value={form.payment}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  >
                    <option value="">Payment Method</option>
                    <option value="card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cash">Cash on Delivery</option>
                  </select>
                  <input
                    name="bottles"
                    type="number"
                    min="1"
                    value={form.bottles}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
                  />

                  {/* Total */}
                  <div className="col-span-2 text-right">
                    <span className="text-gray-300">Total: </span>
                    <span className="ml-2 text-[#bfa37c] font-semibold">
                      ${totalCost}
                    </span>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <button
                    onClick={handlePlaceOrder}
                    className="border border-[#bfa37c] px-8 py-3 uppercase text-sm tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition"
                  >
                    Place Order
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#bfa37c] mb-4">
                  Order Confirmed !!!
                </h2>
                <p>
                  Thank you{" "}
                  <span className="font-semibold">{form.name || "Guest"}</span>,
                  your order of{" "}
                  <span className="font-semibold">{form.bottles}</span>{" "}
                  bottle{form.bottles > 1 ? "s" : ""} of{" "}
                  <span className="font-semibold">{selectedWine.name}</span> has
                  been placed.
                </p>
                <p className="mt-2 text-[#bfa37c] font-semibold">
                  Total Paid: ${totalCost}
                </p>

                <div className="mt-8">
                  <button
                    onClick={handleCloseModal}
                    className="border border-[#bfa37c] px-6 py-2 uppercase text-sm tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Section */}
      <BookTable />
    </div>
  );
}
