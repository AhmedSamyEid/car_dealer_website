import Image from "next/image";

export default function Ourteam() {
  const user = [
    {
      image: "/image/team9.jpg.png",
      name: "Courtney Henry",
      Job: "Development Manager",
    },
    {
      image: "/image/team5.jpg.png",
      name: "Jerome Bell",
      Job: "Software Developer",
    },
    {
      image: "/image/team6-1.jpg.png",
      name: "Jerome Bell",
      Job: "Software Tester",
    },
    {
      image: "/image/team7.jpg.png",
      name: "Arlene McCoy",
      Job: "Software Developer",
    },
    {
      image: "/image/team8.jpg.png",
      name: "Jenny Wilson",
      Job: "UI/UX Designer",
    },
  ];
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {user.map((user, i) => (
        <div key={i} className="flex flex-col items-center shadow-lg rounded-lg p-4 w-[240px]">
          <h3 className="text-lg font-semibold mt-2">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.Job}</p>
          <Image src={user.image} alt={user.name} width={250} height={250} className="rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-115
" />
        </div>
      ))}
    </div>
  );
}
