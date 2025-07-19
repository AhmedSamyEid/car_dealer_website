import Image from "next/image";

export default function GetFairPrice() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-4">
      <div className="flex items-center gap-7">
        <Image src="/image/h711.jpg.png" alt="car" width={150} height={50} />
        <Image src="/image/h7472.jpg.png" alt="car" width={140} height={100} />
      </div>
      <div className="max-w-xl ml-5">
        <h2 className="text-2xl font-bold mb-2">Get A Fair Price For Your<br /> Car - Sell To Us Today</h2>
        <p className="mb-4">
          We are committed to providing our customers with exceptional service, <br />
          competitive pricing, and a wide range of.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>We are the UK’s largest provider, with more patrols in more places</li>
          <li>You get 24/7 roadside assistance</li>
          <li>We fix 4 out of 5 cars at the roadside</li>
        </ul>
      </div>
    </div>
  );
}
