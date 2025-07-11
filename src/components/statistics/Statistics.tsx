"use client";
import { useEffect, useState } from "react";

function parseLabel(label: string): number {
  const multiplier = label.includes("M") ? 1_000_000 : 1;
  return parseFloat(label.replace(/[^\d.]/g, "")) * multiplier;
}

function formatNumber(num: number, originalLabel: string): string {
  if (originalLabel.includes("M")) return `${(num / 1_000_000).toFixed(0)}M`;
  return num.toString();
}

export function Statistics() {
  const stats = [
    { label: "83M", desc: "CARS FOR SALE" },
    { label: "72M", desc: "DEALER REVIEWS" },
    { label: "120M", desc: "VISITORS PER DAY" },
    { label: "33M", desc: "VERIFIED DEALERS" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = (duration / 1000) * frameRate;

    const targetValues = stats.map((s) => parseLabel(s.label));

    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounts(targetValues.map((target) => Math.round(target * progress)));

      if (frame === totalFrames) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-3xl font-bold text-black">{formatNumber(counts[idx], stat.label)}</h3>
            <p className="text-gray-600 mt-2">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
