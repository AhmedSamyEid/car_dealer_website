"use client";
export function ShopByCategory() {
  const categories = [
    "Ford Cars", "Toyota Cars", "Hyundai Cars", "Jeep Cars", "Kia Cars", "Chevrolet Cars",
    "Chrysler Cars", "Mazda Cars", "Nissan Cars", "Mini Cars", "Audi Cars", "Bentley Cars",
    "Tesla Cars", "Subaru Cars", "Volvo Cars", "BMW Cars", "GMC Cars", "Lexus Cars"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Shop BoxCar Your Way</h2>
          <button className="text-sm text-gray-500 hover:underline">View More</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          {categories.map((item, index) => (
            <span key={index} className="hover:text-blue-600 cursor-pointer">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}