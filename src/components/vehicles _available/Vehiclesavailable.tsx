"use client";

import Image from "next/image";
import { useState } from "react";

const imags = [
  { imag: "/image/Background.png.png", alt: "Car Image 1" },
  { imag: "/image/Background8.png", alt: "Car Image 3" },
  { imag: "/image/rs-module.png", alt: "Car Image 2" },
  { imag: "/image/Tabpanel11.png", alt: "Car Image 2" },
  { imag: "/image/Background(66).png", alt: "Car Image 4" },
];

export default function Vehiclesavailable() {
  const [currentIndex, setCurrentIndex] = useState(Math.trunc(imags.length / 2));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imags.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imags.length) % imags.length);
  };

  return (
    <div className="relative bottom-17 w-full h-screen overflow-hidden">
      {imags.map((item, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <Image src={item.imag} alt={item.alt} fill className="object-cover" priority={index === currentIndex} />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50 z-20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-30">
        <p className="text-gray-200 mb-2">Find cars for sale and for rent near you</p>
        <h1 className="text-4xl font-bold max-w-2xl">A Vehicle For Every Lifestyle Today</h1>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-40" aria-label="Previous Slide">
        &#8592;
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-40" aria-label="Next Slide">
        &#8594;
      </button>
    </div>
  );
}
