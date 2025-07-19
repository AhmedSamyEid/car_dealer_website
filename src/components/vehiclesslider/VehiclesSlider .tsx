"use client";
import Image from "next/image";

const vehicles = [
  {
    name: "Audi A4",
    image: "/image/Container.png",
    price: "$30,000",
    year: "2023",
    mileage: "20,000 km",
    fuel: "Petrol",
  },
  {
    name: "BMW X5",
    image: "/image/Link.png",
    price: "$50,000",
    year: "2022",
    mileage: "15,000 km",
    fuel: "Diesel",
  },
  {
    name: "Ford Mustang",
    image: "/image/Container (1).png",
    price: "$45,000",
    year: "2021",
    mileage: "10,000 km",
    fuel: "Petrol",
  },
  {
    name: "Ford Mustang",
    image: "/image/Container (2).png",
    price: "$45,000",
    year: "2021",
    mileage: "10,000 km",
    fuel: "Petrol",
  },
  {
    name: "Ford Mustang",
    image: "/image/Figure → Link (1).png",
    price: "$45,000",
    year: "2021",
    mileage: "10,000 km",
    fuel: "Petrol",
  },
];

export function VehiclesSlider() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Explore All Vehicles</h2>
          <button className="text-blue-600 hover:underline text-sm">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {vehicles.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110">
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.year} • {car.mileage} • {car.fuel}</p>
                <p className="mt-2 text-blue-600 font-bold">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}