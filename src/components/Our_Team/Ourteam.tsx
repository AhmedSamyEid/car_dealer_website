"use client";

import Image from "next/image";

const users = [
  { imag: "/image/team1.jpg.png", alt: "team1", name: "Courtney Henry", dec: "Development Manager" },
  { imag: "/image/Container77.png", alt: "Container77", name: "Courtney Henry", dec: "Software Tester" },
  { imag: "/image/Container (177).png", alt: "Container", name: "Courtney Henry", dec: "Software Developer" },
  { imag: "/image/Container (24798).png", alt: "Container", name: "Courtney Henry", dec: "UI/UX Designer" },
];

export default function OurTeam() {
  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {users.map((user, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-3 transition-transform duration-300 ease-in-out hover:scale-110
">
            <Image src={user.imag} alt={user.alt} width={250} height={200} className=" object-cover shadow-md" />
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.dec}</p>
          </div>
        ))}
      </div>
      <Image src="/image/Background(55).png"  alt="Background" width={900} height={200} className="w-full py-7 "/>
    </div>
  );
}
