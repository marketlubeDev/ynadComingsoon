import Link from "next/link";
import Image from "next/image";
import { SITE, waLink, mailLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__caption">
        <div className="container">
          <span className="kicker">YNAD Mount Resort · Wayanad</span>
          <h2>
            Some places you visit. This one quietly becomes your second home —
            where the mist comes down to rest, and so do you.
          </h2>
        </div>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <Image
            src="/brand/ynadlogo.svg"
            alt="YNAD Mount Resort"
            width={170}
            height={68}
          />
          <p>
            A hillside sanctuary in the tea country of Rippon, Meppadi — built
            for slow mornings, moody weather and people who collect silences.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer__links">
            <li>
              <Link href="/#rooms">Rooms &amp; Stays</Link>
            </li>
            <li>
              <Link href="/#offers">Offers</Link>
            </li>
            <li>
              <Link href="/amenities">Amenities</Link>
            </li>
            <li>
              <Link href="/#experience">The Experience</Link>
            </li>
            <li>
              <Link href="/blog">The Journal</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Stays</h4>
          <ul className="footer__links">
            <li>
              <Link href="/rooms/vintage-home">Vintage Home</Link>
            </li>
            <li>
              <Link href="/rooms/premium-suite">Premium Suite</Link>
            </li>
            <li>
              <Link href="/rooms/junior-suite">Junior Suite</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Find Us</h4>
          <address>
            {SITE.address.line},
            <br />
            {SITE.address.district}, {SITE.address.region}{" "}
            {SITE.address.postalCode}
            <br />
            <a href={SITE.mapsQuery} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
            <br />
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {SITE.phone}
            </a>
            <br />
            <a href={mailLink()}>{SITE.email}</a>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>Valathoor · Rippon · Meppadi · Wayanad</span>
        </div>
      </div>
    </footer>
  );
}
