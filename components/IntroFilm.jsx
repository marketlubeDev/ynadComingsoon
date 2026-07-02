"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_FILMS } from "@/data/home";

const SWAP = 8000; // ms between slow cross-fades

export default function IntroFilm() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const wrapRef = useRef(null);
  const videoRefs = useRef([]);

  // cross-fade between the ambient clips
  useEffect(() => {
    if (INTRO_FILMS.length < 2) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % INTRO_FILMS.length),
      SWAP
    );
    return () => clearInterval(timer);
  }, []);

  // track whether the band is on screen
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  // play ONLY the visible clip; the hidden one stays paused so it doesn't
  // stream or decode in the background (saves data + battery)
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (inView && i === active) v.play().catch(() => {});
      else v.pause();
    });
  }, [inView, active]);

  return (
    <div className="intro-film" ref={wrapRef}>
      {INTRO_FILMS.map((film, i) => (
        <video
          key={film.src}
          ref={(el) => (videoRefs.current[i] = el)}
          className={`intro-film__clip${i === active ? " is-active" : ""}`}
          src={film.src}
          poster={film.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden={i !== active}
        />
      ))}
      <div className="intro-film__scrim" />
      <span className="intro-film__tag">
        The hills around YNAD, in real time
      </span>
    </div>
  );
}
