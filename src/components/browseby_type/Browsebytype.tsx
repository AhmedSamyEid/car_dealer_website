"use client";
import Image from "next/image";

const brands = [
  { name: "Audi", img: "/image/suv.jpg.png" },
  { name: "BMW", img: "/image/h72.jpg.png" },
  { name: "Ford", img: "/image/h73.jpg.png" },
  { name: "Toyota", img: "/image/h74.jpg.png" },
  { name: "Porsche", img: "/image/h75.jpg.png" },
 
];

export function Browsebytype() {
  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Browse by Type</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {brands.map((brand) => (
            <div key={brand.name} className="w-50 h-50 md:w-50 md:h-50 relative flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105
">
              <Image src={brand.img} alt={brand.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
