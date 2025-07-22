"use client";

import Image from "next/image";
import { useState } from "react";

const imags = [
  { imag: "/image/Background.png.png", alt: "Car Image 1" },
  { imag: "/image/Background8.png", alt: "Car Image 3" },
  { imag: "/image/rs-sbg-px → rs-sbg-wrap → rs-sbg.png", alt: "Car Image 2" },
  { imag: "/image/Background(66).png", alt: "Car Image 4" },
  { imag: "/image/Background+Overlay.png", alt: "Car Image 5" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(Math.trunc(imags.length / 2));

  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % imags.length);
  }

  function prevSlide() {
    setCurrentIndex((prev) => (prev - 1 + imags.length) % imags.length);
  }

  return (
    <div className="relative bottom-17 w-full h-screen overflow-hidden">
      {imags.map((item, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <Image src={item.imag} alt={item.alt} layout="fill" className="object-cover" priority={index === currentIndex} />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50 z-20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-30 text-white px-4 z-30">
        <p className="text-sm md:text-sm text-gray-200 mb-2">The World s Largest Used Car Dealership</p>
        <h1 className="text-4xl md:text-5xl mb-6">Find Your Perfect Vehicle Online</h1>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-40">
        &#8592;
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-40">
        &#8594;
      </button>
    </div>
  );
}
