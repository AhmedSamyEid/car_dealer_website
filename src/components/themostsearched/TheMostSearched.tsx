"use client";

import Image from "next/image";


export default function TheMostSearchedCars() {
  const cars = [
    {
      name: "Ford Everest – 2021",
      image: "/image/Link20.png",
      price: "$32,000",
      year: "2021",
      mileage: "25,000 km",
      fuel: "Petrol",
    },
    {
      name: "Nissan GLC – 2023",
      image: "/image/Link.png",
      price: "$18,000",
      year: "2023",
      mileage: "15,000 km",
      fuel: "Diesel",
    },
    {
      name: "Audi A5 S – 2View",
      image: "/image/Link (1).png",
      price: "$58,000",
      year: "2022",
      mileage: "12,000 km",
      fuel: "Petrol",
    },
    {
      name: "Conda AR8 – 2023",
      image: "/image/Container20.png",
      price: "$46,000",
      year: "2023",
      mileage: "10,000 km",
      fuel: "Electric",
    },
  ];
  const car = [
    {
      name: "T-Cross – 2023",
      image: "/image/Container88.png",
      price: "$$15,000",
      year: "2023",
      mileage: "25,000 km",
      fuel: "Petrol",
    },
    {
      name: "C-Class – 2023",
      image: "/image/Link1100.png",
      price: "$18,000",
      year: "2023",
      mileage: "15,000 km",
      fuel: "Diesel",
    },
    {
      name: "Ford Transit – 2021",
      image: "/image/Link20.png",
      price: "$58,000",
      year: "2022",
      mileage: "12,000 km",
      fuel: "Petrol",
    },
    {
      name: "New GLC – 2023",
      image: "/image/Link.png",
      price: "$$95,000",
      year: "2023",
      mileage: "10,000 km",
      fuel: "Electric",
    },
  ];



  return (
    <main className="py-12 px-4 max-w-7xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-blue-100 h-60  p-15 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Are You Looking For a Car?</h3>
          <p className="text-gray-600 mb-4">We have a wide selection of quality vehicles.</p>
          <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-full">Get Started</button>
        </div>
        <div className="bg-pink-100 h-60 p-15 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Do You Want to Sell a Car?</h3>
          <p className="text-gray-600 mb-4">Easily list your car and reach thousands of buyers.</p>
          <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-full">Get Started</button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Explore All Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cars.map((car, i) => (
            <div key={i} className="bg-white  shadow-md rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110
">
              <Image src={car.image} alt={car.name} width={400} height={250} className="w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-black text-lg mb-1">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  {car.year} • {car.mileage} • {car.fuel}
                </p>
                <p className="font-bold text-blue-600">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
        
      </section>


      <section>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {car.map((car, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={car.image} alt={car.name} width={400} height={250} className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110
" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  {car.year} • {car.mileage} • {car.fuel}
                </p>
                <p className="font-bold text-blue-600">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
