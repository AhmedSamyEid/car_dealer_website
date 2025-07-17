"use client";

import Image from "next/image";

const users = [
  { imag: "/image/Containe_r.png", alt: "team1", name: "Courtney Henry", dec: "Development Manager" },
  { imag: "/image/Co_ntainer (177).png", alt: "Container77", name: "Jerome Bell", dec: "Software Tester" },
  { imag: "/image/Containe77.png", alt: "Container", name: "Arlene McCoy", dec: "Software Developer" },
  { imag: "/image/Contain.png", alt: "Container", name: "Jenny Wilson", dec: "UI/UX Designer" },
];

export default function OurTeam() {
  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {users.map((user, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-3">
            <Image src={user.imag} alt={user.alt} width={220} height={200} className=" object-cover shadow-md" />
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.dec}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
