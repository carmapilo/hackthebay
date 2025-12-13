'use client';

import { useState } from 'react';

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
};

export function Starfield() {
  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 360 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.2 + 0.6,
      opacity: Math.random() * 0.35 + 0.22,
    })),
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          boxShadow: `0 0 ${star.size * 5}px ${star.size}px rgba(255,255,255,0.4)`,
          }}
        />
      ))}
      {/* subtle noise fallback so stars are visible even if the div fails to render */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.07),transparent_22%)]" />
    </div>
  );
}

