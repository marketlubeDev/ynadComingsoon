import { ROOMS } from "@/data/home";
import Reveal from "./Reveal";
import RoomCard from "./RoomCard";

export default function Rooms() {
  return (
    <section className="section rooms" id="rooms">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Stay With Us</span>
          <h2 className="section-title">
            Three ways to <em>slow down</em>
          </h2>
          <p>
            From a planter&apos;s-era home to refined mist-view rooms — every
            stay opens into the green hush of Rippon&apos;s tea country.
          </p>
        </Reveal>

        <div className="rooms__grid">
          {ROOMS.map((room, i) => (
            <Reveal key={room.slug} delay={i * 0.12}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
