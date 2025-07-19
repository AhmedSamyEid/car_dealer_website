import Image from "next/image";

const cars = [
  { imag: "/image/h1.jpg.png", alt: "car" },
  { imag: "/image/h43.jpg.png", alt: "car" },
  { imag: "/image/h44.jpg.png", alt: "car" },
  { imag: "/image/h45.jpg.png", alt: "car" },
  { imag: "/image/h46.jpg.png", alt: "car" }
];

export default function BrowsebyType() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2.5 gap-4 p-4">
      {cars.map((car, i) => (
        <div key={i} className="overflow-hidden rounded-md shadow hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-107
">
          <Image
            src={car.imag}
            alt={car.alt}
            width={700}
            height={250}
            className="object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}
