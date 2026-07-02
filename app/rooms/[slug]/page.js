import Link from "next/link";
import { notFound } from "next/navigation";
import { ROOMS, getRoom } from "@/data/home";
import { SITE, waLink } from "@/data/site";
import Amenities from "@/components/Amenities";
import RoomGallery from "@/components/RoomGallery";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return ROOMS.filter((room) => room.hasPage).map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room || !room.hasPage) return {};
  return {
    title: room.metaTitle || room.name,
    description: room.metaDescription,
    keywords: room.keywords,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      type: "website",
      title: room.metaTitle || room.name,
      description: room.metaDescription,
      images: (room.images || [room.image]).map((src) => ({
        url: `${SITE.baseUrl}${src}`,
        width: 1536,
        height: 1024,
        alt: `${room.name} at YNAD Mount Resort, Wayanad`,
      })),
    },
  };
}

export default async function RoomPage({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room || !room.hasPage) notFound();

  const gallery = room.images?.length ? room.images : [room.image];
  const tel = `tel:${SITE.phone.replace(/\s/g, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.metaDescription || room.blurb,
    image: gallery.map((src) => `${SITE.baseUrl}${src}`),
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bedType || "King",
      numberOfBeds: 1,
    },
    occupancy: {
      "@type": "QuantitativeValue",
      unitText: "person",
      maxValue: room.maxOccupancy || 3,
    },
    amenityFeature: (room.roomFeatures || []).map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    containedInPlace: { "@type": "Resort", name: SITE.name, url: SITE.baseUrl },
  };

  return (
    <article className="room-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero room-hero">
        <div className="container">
          <Link href="/#rooms" className="room-hero__back">
            <ArrowIcon
              width={14}
              height={14}
              style={{ transform: "rotate(180deg)" }}
            />
            All Stays
          </Link>

          <div className="room-hero__grid">
            <Reveal className="room-hero__gallery">
              <RoomGallery images={gallery} alt={room.name} />
            </Reveal>

            <Reveal className="room-hero__info" delay={0.1}>
              <span className="kicker">Rooms &amp; Stays</span>
              <h1>{room.name}</h1>
              {room.tagline && (
                <p className="room-hero__tagline">{room.tagline}</p>
              )}

              {room.specs?.length > 0 && (
                <dl className="room-hero__specs">
                  {room.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="room-hero__actions">
                <a
                  className="btn btn--solid"
                  href={waLink(room.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Availability
                </a>
                <a className="btn btn--light" href={tel}>
                  Call Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section room-about">
        <div className="container">
          <Reveal className="room-about__story">
            <span className="kicker">{room.aboutKicker || "The Stay"}</span>
            <h2 className="section-title">
              {room.aboutLead || "Room to"}{" "}
              <em>{room.aboutEm || "spread out"}</em>
            </h2>
            {(room.description || [room.blurb]).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          {room.roomFeatures?.length > 0 && (
            <Reveal className="room-about__features" delay={0.1}>
              <h3>In this room</h3>
              <ul>
                {room.roomFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      <Amenities />
    </article>
  );
}
