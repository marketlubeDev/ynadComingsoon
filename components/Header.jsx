"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/data/site";

const NAV = [
  { href: "/#rooms", label: "Rooms" },
  { href: "/#offers", label: "Offers" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/blog", label: "Journal" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="header__brand" onClick={() => setOpen(false)}>
          <Image
            src="/brand/ynadlogo.svg"
            alt="YNAD Mount Resort"
            width={150}
            height={60}
            className="header__logo"
            priority
          />
        </Link>

        <nav className={`header__nav${open ? " is-open" : ""}`}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a
            className="btn btn--light"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>

        <button
          className={`header__toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
