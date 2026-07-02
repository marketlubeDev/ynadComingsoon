"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "./icons";

// Horizontal, swipeable photo carousel for the room detail page.
// - Native scroll-snap: drag/swipe on touch + trackpad.
// - Prev/Next buttons for mouse/keyboard on web and a tap target on mobile.
// - Dots jump to any photo. Auto-advances every few seconds, pausing while the
//   visitor is interacting (hover or an in-progress touch) so it never fights them.
export default function RoomGallery({ images, alt, interval = 5000 }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState(0);
  const count = images.length;

  const goTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const idx = (i + count) % count;
    track.scrollTo({ left: track.clientWidth * idx, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  // Auto-advance is driven off the `active` state (same source as the buttons),
  // so the two paths can never disagree mid-scroll. Re-armed on each advance.
  useEffect(() => {
    if (count <= 1) return undefined;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      goTo(active + 1);
    }, interval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, interval, active]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div className="room-carousel">
      <div
        className="room-carousel__viewport"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        onTouchCancel={resume}
      >
        <div
          className="room-carousel__track"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {images.map((src, i) => (
            <figure
              className="room-carousel__slide"
              key={src}
              aria-hidden={i !== active}
            >
              <Image
                src={src}
                alt={`${alt}, view ${i + 1}`}
                fill
                sizes="(max-width: 980px) 100vw, 60vw"
                priority={i === 0}
              />
            </figure>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="room-carousel__nav room-carousel__nav--prev"
              onClick={() => goTo(active - 1)}
              aria-label="Previous photo"
            >
              <ArrowIcon />
            </button>
            <button
              type="button"
              className="room-carousel__nav room-carousel__nav--next"
              onClick={() => goTo(active + 1)}
              aria-label="Next photo"
            >
              <ArrowIcon />
            </button>
            <span className="room-carousel__count" aria-live="polite">
              {active + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="room-carousel__dots" role="group" aria-label="Choose photo">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Photo ${i + 1}${i === active ? " (current)" : ""}`}
              aria-current={i === active ? "true" : undefined}
              className={`room-carousel__dot${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
