import { waLink } from "@/data/site";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="section cta-band">
      <div className="container">
        <Reveal>
          <span className="kicker">Your Dates, Our Hill</span>
          <h2>
            The mist doesn&apos;t wait, <em>and the best weekends go first</em>
          </h2>
          <p>
            Message us on WhatsApp. A real person replies in minutes with
            availability and our best direct rates.
          </p>
          <a
            className="btn btn--light"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Book on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
