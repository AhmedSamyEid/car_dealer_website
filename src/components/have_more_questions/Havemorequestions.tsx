"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Havemorequestions() {
  return (
    <div className="bg-[#f8fafc] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image src="/image/h774.jpg.png" alt="Contact Girl" width={600} height={600} className="rounded-lg object-cover w-full" />
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Have More Questions? <br /> Don&apos;t Hesitate To Reach Us
          </h2>

          <p className="text-gray-600">
            123 Queensberry Street, North <br />
            Melbourne VIC3051, Australia.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-800">
              <Phone className="w-4 h-4" />
              <span>+76 956 039 999</span>
            </div>

            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-800">
              <Mail className="w-4 h-4" />
              <span>ali@boxcars.com</span>
            </div>
          </div>

          <button className="bg-[#0f172a] text-white px-6 py-3 rounded-md hover:bg-[#1e293b] transition">Get Started →</button>
        </div>
      </div>
    </div>
  );
}
