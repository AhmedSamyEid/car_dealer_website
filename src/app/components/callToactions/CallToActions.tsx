"use client";
import { FaCar, FaDollarSign } from "react-icons/fa";

export function CallToActions() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <div className="text-blue-600 text-4xl mb-2"><FaCar /></div>
          <h3 className="font-bold text-lg mb-2">Are You Looking For a Car?</h3>
          <p className="text-sm text-gray-600 mb-4">We offer a wide selection of quality cars with competitive pricing.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Get Your Car</button>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg text-center">
          <div className="text-pink-600 text-4xl mb-2"><FaDollarSign /></div>
          <h3 className="font-bold text-lg mb-2">Do You Want to Sell a Car?</h3>
          <p className="text-sm text-gray-600 mb-4">We provide the best platforms for purchasing and customers trust us.</p>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full">Get Earn Now</button>
        </div>
      </div>
    </section>
  );
}
