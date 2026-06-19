"use client";

import { useEffect, useRef } from "react";
import { REELS } from "@/data/home";
import Reveal from "./Reveal";

function ReelVideo({ src, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="reel-card">
      <video ref={ref} src={src} muted loop playsInline preload="none" />
      <span>{label}</span>
    </figure>
  );
}

export default function Reels() {
  // track is duplicated so the -50% translate loops seamlessly
  const loop = [...REELS, ...REELS];

  return (
    <section className="section reels" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Moments at YNAD</span>
          <h2 className="section-title">
            The hills, <em>in motion</em>
          </h2>
          <p>
            Mist, monsoon and waterfalls — small films from our corner of
            Wayanad. Hover to pause and stay a while.
          </p>
        </Reveal>
      </div>

      <Reveal className="reels__track-wrap">
        <div className="reels__track">
          {loop.map((reel, i) => (
            <ReelVideo key={`${reel.src}-${i}`} src={reel.src} label={reel.label} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
