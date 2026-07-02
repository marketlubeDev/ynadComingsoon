import { OFFERS } from "@/data/home";
import { waLink } from "@/data/site";
import { ArrowIcon } from "./icons";
import Reveal from "./Reveal";

export default function Offers() {
  return (
    <section className="section offers" id="offers">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Seasonal Offers</span>
          <h2 className="section-title">
            Small luxuries, <em>quietly priced</em>
          </h2>
          <p>
            Direct bookings on WhatsApp always get our best rate, and a few
            extra reasons to stay longer.
          </p>
        </Reveal>

        <div className="offers__grid">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 0.12}>
              <article className="offer-card">
                <div className="offer-card__top">
                  <span className="offer-card__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="offer-card__tag">{offer.title}</span>
                </div>
                <h3>{offer.deal}</h3>
                <p>{offer.note}</p>
                <a
                  className="offer-card__cta"
                  href={waLink(offer.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim on WhatsApp <ArrowIcon width={14} height={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
