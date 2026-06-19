"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/home";
import { waLink } from "@/data/site";

const INTERVAL = 3000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  // re-created on every index change so a manual dot click resets the timer
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % HERO_SLIDES.length),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, [index]);

  const slide = HERO_SLIDES[index];

  return (
    <section className="hero" aria-label="YNAD Mount Resort highlights">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={`hero__slide${i === index ? " is-active" : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="hero__scrim" />

      <div className="container hero__content">
        <div className="hero__caption">
          {/* key remounts the text so the entrance animation replays per slide */}
          <div key={index}>
            <span className="kicker">{slide.kicker}</span>
            <h1>{slide.title}</h1>
            <p>{slide.sub}</p>
          </div>
          <div className="hero__actions">
            <a
              className="btn btn--solid"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Availability
            </a>
            <a className="btn btn--light" href="#rooms">
              Explore Rooms
            </a>
          </div>
        </div>
      </div>

      <div className="hero__meta">
        <div className="hero__dots">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.image}
              className={i === index ? "is-active" : ""}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="hero__scroll">Scroll</div>
    </section>
  );
}
