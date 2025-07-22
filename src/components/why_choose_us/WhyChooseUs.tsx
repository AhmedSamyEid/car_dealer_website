"use client";

import Image from "next/image";

export function WhyChooseUs() {
  const features = [
    {
      img: "/icons/f1-white.svg fill.png",
      title: "Special Financing Offers",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      img: "/icons/f2-white.svg fill.png",
      title: "Trusted Car Dealership",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      img: "/icons/f3-white.svg fill.png",
      title: "Transparent Pricing",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      img: "/icons/f4-white.svg fill.png",
      title: "Expert Car Service",
      dec: "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ];

  return (
    <section className="py-12 bg-[#405FF2]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-white md:text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 p-4 rounded-md shadow-sm hover:shadow-md transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
                className="mb-2"
              />
              <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              <p className="text-white text-sm leading-relaxed">
                {item.dec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
