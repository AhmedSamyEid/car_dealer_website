import Image from "next/image";

export default function Wemakefinding() {
  return (
    <div className="relative w-full h-[500px] ">
      <Image src="/image/Background7777.png" alt="We make finding" fill className="object-cover" />
      <div className="absolute mt-50 flex flex-col justify-start items-center text-white text-center px-4">
        <h2 className="text-3xl mb-4">
          We make finding the
          <br />
          right car simple
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">Find Out More</button>
      </div>
    </div>
  );
}
