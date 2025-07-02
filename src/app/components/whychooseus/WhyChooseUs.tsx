"use client";
import { FaCheckCircle, FaHandshake, FaShieldAlt, FaStar } from "react-icons/fa";

export function WhyChooseUs() {
  const features = [
    { icon: <FaCheckCircle />, title: "Trusted Platform" },
    { icon: <FaHandshake />, title: "Verified Dealers" },
    { icon: <FaShieldAlt />, title: "Secure Payments" },
    { icon: <FaStar />, title: "Top Rated Support" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-blue-600 text-3xl mb-2">{item.icon}</div>
              <h3 className="font-medium text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
