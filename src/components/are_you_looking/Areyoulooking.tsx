"use client";
import Image from "next/image";

export default function areyoulooking() {
  return (
    <div className="flex justify-center items-center gap-8 p-8 ">
      <div className="relative w-[625px] h-[400px] group overflow-hidden rounded-lg shadow-lg ">
        <Image src="/image/Backgrnd.png" alt="car" fill className="object-cover" />

        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">
            Are You Looking
            <br /> For a Car ?
          </h3>
          <p className="text-sm m-2 text-gray-200">
            We are committed to providing our customers with
            <br /> exceptional service.
          </p>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Get Started</button>
        </div>
      </div>

      <div className="relative w-[625px] h-[400px] group overflow-hidden rounded-lg shadow-lg ">
        <Image src="/image/Backound (1).png" alt="car" fill className="object-cover" />

        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">
            Do You Want to
            <br /> Sell a Car ?
          </h3>
          <p className="text-sm m-2 text-gray-200">
            We are committed to providing our customers with
            <br /> exceptional service.
          </p>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Get Started</button>
        </div>
      </div>
    </div>
  );
}
