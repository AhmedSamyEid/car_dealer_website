import Image from "next/image";

export default function Exploeour() {
  return (
    <div className="flex flex-wrap items-center justify-around">
      <div className="">
        <h2 className="text-2xl font-semibold">Explore Our Premium Brands</h2>
        <p className="w-80">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br/> deserunt mollit anim id es</p>
        <button>Show All Brands</button>
      </div>
      <div className="">
        <Image src="/image/logo-brand.png.png" alt="Logo Brand" width={400} height={400} />
      </div>
    </div>
  );
}
