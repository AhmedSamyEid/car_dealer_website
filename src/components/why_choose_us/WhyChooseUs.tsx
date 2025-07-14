"use client";

import Image from "next/image";

export function WhyChooseUs() {
  const features = [
    {
      img: "/icons/f1.svg fill.png",
      title: "Special Financing Offers",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      img: "/icons/f2.svg fill.png",
      title: "Trusted Car Dealership",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      img: "/icons/f3.svg.png",
      title: "Transparent Pricing",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      img: "/icons/f4.svg.png",
      title: "Expert Car Service",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 p-4 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
                className="mb-2"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.dec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
