"use client";
import Image from "next/image";

export function SellYourCarSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 md:h-96">
          <Image src="/image/Background.png" alt="Sell Car" fill className="object-cover rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Get A Fair Price For Your Car Sell To Us Today</h2>
          <p className="text-gray-600 mb-6">We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.</p>
          <p>We are the UK’s largest provider, with more patrols in more places</p>
          <br />
          <p>You get 24/7 roadside assistance</p>
          <br />
          <p>We fix 4 out of 5 cars at the roadside</p>
          <br />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500">Get Started</button>
        </div>
      </div>
    </section>
  );
}
