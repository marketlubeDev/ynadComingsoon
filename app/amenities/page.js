import Image from "next/image";
import Link from "next/link";
import { AMENITIES } from "@/data/home";
import { waLink } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

export const metadata = {
  title: "Amenities: Pools, Spa, Bonfire, Games & More",
  description:
    "Every amenity at YNAD Mount Resort, Wayanad: infinity pool, spa, gym, bonfire with music, indoor & outdoor games, BBQ, restaurant, conference hall, 24-hour hot water and security, free WiFi and more.",
  alternates: { canonical: "/amenities" },
  openGraph: {
    title: "Amenities | YNAD Mount Resort, Wayanad",
    description:
      "Infinity pool, spa, bonfire, games, BBQ, restaurant and every comfort of a hillside stay in Meppadi, Wayanad.",
  },
};

export default function AmenitiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Amenities</span>
          <h1>
            Everything for a <em>slow hillside stay</em>
          </h1>
          <p>
            From sunrise swims to bonfires under the stars, here is everything
            waiting for you at YNAD Mount Resort, Wayanad.
          </p>
        </div>
      </section>

      <section className="section amenities-page">
        <div className="container">
          <div className="amenities-page__grid">
            {AMENITIES.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 0.08}>
                <figure className="amenity-tile">
                  <div className="amenity-tile__media">
                    <Image
                      src={item.image}
                      alt={`${item.name} at YNAD Mount Resort, Wayanad`}
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 1080px) 50vw, 380px"
                      loading={i < 6 ? "eager" : "lazy"}
                    />
                    <span
                      className={`amenity-tile__badge${
                        item.included ? " is-included" : ""
                      }`}
                    >
                      {item.badge || (item.included ? "Included" : "Extra")}
                    </span>
                  </div>
                  <figcaption className="amenity-tile__body">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="amenities-page__cta">
            <h2>Ready to settle into the hills?</h2>
            <p>
              Message us on WhatsApp with your dates. We&apos;ll confirm
              availability and our best direct rates within minutes.
            </p>
            <div className="amenities-page__actions">
              <a
                className="btn btn--solid"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability
              </a>
              <Link className="btn btn--dark" href="/#rooms">
                Explore Rooms <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
