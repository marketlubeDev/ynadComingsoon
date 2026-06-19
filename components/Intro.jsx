import Reveal from "./Reveal";
import IntroFilm from "./IntroFilm";

export default function Intro() {
  return (
    <section className="section intro" id="about">
      <div className="container">
        <Reveal className="intro__head">
          <span className="kicker">A Sanctuary in Rippon</span>
          <h2 className="section-title">
            The weather here is <em>an itinerary of its own</em>
          </h2>
        </Reveal>

        <Reveal className="intro__film-wrap" delay={0.1}>
          <IntroFilm />
        </Reveal>

        <Reveal className="intro__stats" delay={0.15}>
          <div className="intro__stat">
            <strong>3</strong>
            <span>Stay styles</span>
          </div>
          <div className="intro__stat">
            <strong>20&nbsp;min</strong>
            <span>From Kalpetta</span>
          </div>
          <div className="intro__stat">
            <strong>∞</strong>
            <span>Mist mornings</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
