"use client";

import Image from "next/image";
import { ReactElement } from 'react';
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FaCarSide, FaTruckPickup, FaChargingStation } from "react-icons/fa";
interface CarType {
  type: string;
  icon: ReactElement;
}
export default function HeroSection() {
  const carTypes: CarType[]  = [
    { type: "SUV", icon: <FaCarSide /> },
    { type: "Sedan", icon: <MdOutlineDirectionsCarFilled /> },
    { type: "Hatchback", icon: <GiCarDoor /> },
    { type: "Truck", icon: <FaTruckPickup /> },
    { type: "Coupe", icon: <FaCarSide /> },
    { type: "Electric", icon: <FaChargingStation /> },
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden bottom-17">
      <Image src="/image/Background.png.png" alt="Car Image" fill className="object-cover" priority />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <p className="text-sm md:text-base text-gray-200 mb-2">Find cars for sale and for rent near you</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Car</h1>
        <div className="bg-white/90 rounded-xl md:rounded-full py-4 px-4 flex justify-around flex-col md:flex-row gap-3 md:gap-4 items-center max-w-4xl w-full shadow-lg mb-8">
          <select className="text-sm text-black  px-4 py-2 w-full md:w-auto">
            <option>Any Make</option>
          </select>
          <select className="text-sm text-black  px-4 py-2 w-full md:w-auto">
            <option>Any Model</option>
          </select>
          <select className="text-sm text-black px-4 py-2 w-full md:w-auto">
            <option>All Prices</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 py-2 text-sm whitespace-nowrap">🔍 Search Cars</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {carTypes.map(({ type, icon }) => (
            <button key={type} className="flex items-center gap-2 bg-white/80 text-black px-4 py-2 rounded-full cursor-pointer text-sm  transition">
              <span className="text-base">{icon}</span>
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
