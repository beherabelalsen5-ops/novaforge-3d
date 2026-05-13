"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState<
    { left: string; top: string; delay: string; size: string }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 3 + 1}px`,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">

      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

    </div>
  );
}