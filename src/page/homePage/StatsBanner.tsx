"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { STATS_DATA } from "@/constants/HOME_PAGE";
import Image from "next/image";

export default function StatsBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const intervals = STATS_DATA.map(({ value }, index) => {
      const duration = 1000;      // total animation time (ms)
      const steps = 60;           // how many frames
      const increment = value / steps;

      const id = setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          next[index] = Math.min(value, prev[index] + increment);
          if (next[index] >= value) clearInterval(id); // stop when done
          return next;
        });
      }, duration / steps);

      return id;
    });

    return () => intervals.forEach(clearInterval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center mt-16 justify-around gap-10 bg-theme py-12 px-4 text-white md:flex-row md:gap-20"
    >
      <Image
        src="/assets/images/homePage/map.jpg"
        alt="World map"
        width={1000}
        height={1000}
        className="absolute size-full object-cover opacity-10"
      />

      {STATS_DATA.map(({ label, suffix }, i) => (
        <div key={label} className="space-y-2 text-center">
          <p className="lg:text-3xl text-xl font-semibold">{label}</p>
          <h2 className="lg:text-7xl text-5xl font-extrabold">
            {Math.floor(counts[i])}
            {suffix ?? ""}
          </h2>
        </div>
      ))}
    </section>
  );
}
