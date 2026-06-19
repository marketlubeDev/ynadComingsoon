import Link from "next/link";
import Image from "next/image";
import { HOME_AMENITIES } from "@/data/home";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

export default function Amenities() {
  return (
    <section className="section amenities" id="amenities">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Amenities</span>
          <h2 className="section-title">
            All you get, <em>and a little more</em>
          </h2>
          <p>
            Everything a hill stay should come with — and a few things worth
            leaving the veranda for.
          </p>
        </Reveal>

        <div className="amenities__grid">
          {HOME_AMENITIES.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.08}>
              <figure className="amenity-card">
                <Image
                  src={item.image}
                  alt={`${item.name} at YNAD Mount Resort, Wayanad`}
                  fill
                  sizes="(max-width: 560px) 50vw, (max-width: 1080px) 33vw, 380px"
                  loading="lazy"
                />
                <figcaption className="amenity-card__caption">
                  <h3>{item.name}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="amenities__cta">
          <Link className="btn btn--dark" href="/amenities">
            View all amenities <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
