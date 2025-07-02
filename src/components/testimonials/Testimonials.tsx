"use client";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">What our customers say</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image src="/image/test1.jpg.png" alt="Customer" width={300} height={300} className="rounded-xl object-cover" />
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-2 text-yellow-500 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="text-black text-sm mb-4">
              I d suggest Macklin Motors Nissan Glasgow South to a friend
              <br />
              because I had great service from my salesman Patrick and all of
              <br />
              the team.
            </p>
            <p className="text-sm font-medium text-black">Ali Yasin, Glasgow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
