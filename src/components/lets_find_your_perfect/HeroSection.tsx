"use client";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

export default function HeroSection() {
  const [selectedTab, setSelectedTab] = useState("new");
  const [price, setPrice] = useState(50000);
  const [model, setModel] = useState("");

  const modelBackgrounds: Record<string, string> = {
    A4: "/image/Background(66).png",
    X5: "/image/rs-sbg-px → rs-sbg-wrap → rs-sbg → image.png",
    Corolla: "/image/Tabpanel.png",
    default: "/image/Background=5.png",
  };

  const selectedBackground = modelBackgrounds[model] || modelBackgrounds["default"];

  return (
    <div className="relative min-h-screen text-white overflow-hidden bottom-17">
      <Image src={selectedBackground} alt="Background" fill className="object-cover z-0" priority />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center">
        <div className="bg-white text-black mt-25 rounded-xl p-6 w-full max-w-md shadow-lg z-20">
          <div className="flex justify-between mb-4">
            <button onClick={() => setSelectedTab("new")} className={classNames("px-4 py-2 rounded-md font-medium", selectedTab === "new" ? "bg-black text-white" : "bg-gray-200")}>
              New
            </button>
            <button onClick={() => setSelectedTab("used")} className={classNames("px-4 py-2 rounded-md font-medium", selectedTab === "used" ? "bg-black text-white" : "bg-gray-200")}>
              Used
            </button>
          </div>

          <div className="space-y-4">
            <select className="w-full border border-gray-300 px-4 py-2 rounded-md">
              <option>Select Make</option>
              <option>Audi</option>
              <option>BMW</option>
              <option>Toyota</option>
            </select>

            <select className="w-full border border-gray-300 px-4 py-2 rounded-md" value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="">Select Model</option>
              <option value="A4">A4</option>
              <option value="X5">X5</option>
              <option value="Corolla">Corolla</option>
            </select>

            <div>
              <label className="block mb-1 text-sm text-gray-700">Select Price</label>
              <input type="range" min="0" max="100000" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>${price.toLocaleString()}</span>
                <span>$100,000</span>
              </div>
            </div>

            <button className="w-full bg-[#405FF2] text-white py-2 rounded-md hover:bg-[#324ed6]">Search</button>
          </div>
        </div>

        <div className="text-center md:text-left mt-12 md:mt-0 md:ml-12 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Lets Find Your Perfect Car</h1>
          <p className="text-gray-200">Browse thousands of listings to find your ideal new or used car.</p>
        </div>
      </div>
    </div>
  );
}
