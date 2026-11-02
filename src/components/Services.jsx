import Tilt from "./Tilt.jsx";
import { SERVICES, BASE, G } from "../data/services.js";

export default function Services() {
  return (
    <section id="services">
      <h2>Our services</h2>
      <p className="sub">Comprehensive creative and technical solutions tailored to your needs</p>
      <div className="svcgrid">
        {SERVICES.map((s) => (
          <Tilt key={s.t} className="svc">
            <svg
              className="svart"
              viewBox="0 0 320 140"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              style={{ "--a": s.a, "--b": s.b }}
              dangerouslySetInnerHTML={{ __html: BASE + G(s.g) }}
            />
            <div className="svbody">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <a className="more" href="#contact">Learn more</a>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
