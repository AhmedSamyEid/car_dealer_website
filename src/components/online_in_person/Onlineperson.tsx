'use client'
import Image from "next/image";

export default function Onlineinperson() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-6  px-6 md:px-20 py-20 bg-white">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Online, in-person,<br/> everywhere</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">Choose from thousands of vehicles from multiple brands and buy online with Click &<br/> Drive, or visit us at one of our dealerships today.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">Get Started</button>
      </div>
      <div className="flex-shrink-0">
        <Image src="/image/h21.jpg.png" alt="car" width={500} height={500} className="rounded-xl shadow-md" />
      </div>
    </div>
  );
}
