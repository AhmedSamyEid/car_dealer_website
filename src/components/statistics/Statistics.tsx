"use client";
export function Statistics() {
  const stats = [
    { label: "83M", desc: "CARS FOR SALE" },
    { label: "72M", desc: "DEALER REVIEWS" },
    { label: "120M", desc: "VISITORS PER DAY" },
    { label: "33M", desc: "VERIFIED DEALERS" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-3xl font-bold text-black">{stat.label}</h3>
            <p className="text-gray-600 mt-2">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}