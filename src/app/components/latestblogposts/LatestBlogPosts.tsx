import Image from "next/image";

const popularCars = [
  {
    name: "admin - November 22, 2023",
    image: "/image/Container7.png",
    location: "2024 BMW ALPINA XB7 with exclusive details,extraordinary",
  },
  {
    name: "admin - November 22, 2023",
    image: "/image/Figure → Link.png",
    location: "BMW X6 M50i is designed to exceed yoursportiest.",
  },
  {
    name: "admin - November 22, 2023",
    image: "/image/Figure → Link (1).png",
    location: "BMW X5 Gold 2024 Sport Review: Light on Sport",
  },
];

export function LatestBlogPosts() {
  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Latest Blog Posts</h2>
          <button className="text-sm text-white/60 hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularCars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <Image src={car.image} alt={car.name} width={400} height={250} className="w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{car.name}</h3>

                <p className="text-sm text-black/70 mb-1">{car.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
