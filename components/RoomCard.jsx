"use client";

import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/data/site";
import { ArrowIcon } from "./icons";
import RoomSlideshow from "./RoomSlideshow";

export default function RoomCard({ room }) {
  const href = room.hasPage ? `/rooms/${room.slug}` : null;
  const alt = `${room.name} at YNAD Mount Resort, Wayanad`;
  const sizes = "(max-width: 820px) 100vw, 33vw";

  const media = (
    <div className="room-card__media">
      {room.images?.length ? (
        <RoomSlideshow images={room.images} alt={alt} sizes={sizes} />
      ) : (
        <Image src={room.image} alt={alt} fill sizes={sizes} />
      )}
      <span aria-hidden="true">{room.name}</span>
    </div>
  );

  return (
    <article className="room-card">
      {href ? (
        <Link href={href} className="room-card__media-link" aria-label={`View the ${room.name}`}>
          {media}
        </Link>
      ) : (
        media
      )}

      <div className="room-card__body">
        <h3>{href ? <Link href={href}>{room.name}</Link> : room.name}</h3>
        <p>{room.blurb}</p>
        <ul className="room-card__details">
          {room.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <div className="room-card__actions">
          <a
            className="btn btn--solid"
            href={waLink(room.wa)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Availability
          </a>
          {href && (
            <Link className="btn btn--dark" href={href}>
              View Room <ArrowIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
