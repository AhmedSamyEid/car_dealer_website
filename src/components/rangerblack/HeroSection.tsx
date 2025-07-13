"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white bottom-17">
      <Image src="/image/Tabpanel.png" alt="Car Image" fill className="object-cover" priority />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute inset-0 flex flex-row items-center justify-around text-center text-white px-4 z-20">
        <div className="">
          <h2 className="text-2xl  text-gray-200 mb-2">$165,000</h2>
          <h1 className="text-4xl text-white md:text-6xl  mb-6">
            Ranger Black – <br /> 2021
          </h1>
        </div>
        <Image src="/image/Overlay.png" alt="Car Image" width={150} height={80} className="object-contain" />
      </div>
    </div>
  );
}
