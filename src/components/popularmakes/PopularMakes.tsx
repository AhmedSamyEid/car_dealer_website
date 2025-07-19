"use client";
import Image from "next/image";

const popularCars = [
  {
    name: "Audi A4 - 2022",
    image: "/image/Link4.png",
    price: "$66,000",
    mileage: "18,000 mi",
    location: "New York, USA",
  },
  {
    name: "Toyota Hilux - 2023",
    image: "/image/Container2.png",
    price: "$79,000",
    mileage: "12,000 mi",
    location: "California, USA",
  },
  {
    name: "BMW X5 - 2021",
    image: "/image/Container2.png",
    price: "$103,000",
    mileage: "25,000 mi",
    location: "Texas, USA",
  },
];

export function PopularMakes() {
  return (
    <section className="py-12 bg-[#0A0A23] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Popular Makes</h2>
          <button className="text-sm text-white/60 hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularCars.map((car, index) => (
            <div key={index} className="bg-[#1C1C3A] rounded-lg overflow-hidden">
              <Image src={car.image} alt={car.name} width={400} height={250} className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-115
" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{car.name}</h3>
                <p className="text-sm text-white/70 mb-1">{car.mileage}</p>
                <p className="text-sm text-white/70 mb-1">{car.location}</p>
                <p className="text-blue-400 font-bold mt-2">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
