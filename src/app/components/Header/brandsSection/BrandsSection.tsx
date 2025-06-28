"use client";
import Image from "next/image";

const brands = [
  { name: "Audi", img: "/image/b1.jpg.png" },
  { name: "BMW", img: "/image/b2.jpg.png" },
  { name: "Ford", img: "/image/b3.jpg.png" },
  { name: "Toyota", img: "/image/b4.jpg.png" },
  { name: "Porsche", img: "/image/b5.jpg.png" },
  { name: "Volkswagen", img: "/image/b6.jpg.png" },
];

export function BrandsSection() {
  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Explore Our Premium Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {brands.map((brand) => (
            <div key={brand.name} className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center">
              <Image src={brand.img} alt={brand.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
