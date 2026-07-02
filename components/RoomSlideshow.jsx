"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Auto-fading image stack used inside a room card's media box.
// The parent must be position:relative with a fixed aspect ratio.
export default function RoomSlideshow({
  images,
  alt,
  sizes,
  interval = 4000,
  priority = false,
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="room-slideshow" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src}
          className={`room-slideshow__slide${i === active ? " is-active" : ""}`}
        >
          <Image
            src={src}
            alt={`${alt}, view ${i + 1}`}
            fill
            sizes={sizes}
            priority={priority && i === 0}
          />
        </div>
      ))}
    </div>
  );
}
