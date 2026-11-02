import Tilt from "./Tilt.jsx";
import { STACK } from "../data/stack.js";

export default function Stack() {
  return (
    <section id="stack">
      <h2>What I work with</h2>
      <p className="sub">Code, camera and campaigns, all under one roof.</p>
      <div className="skills">
        {Object.entries(STACK).map(([k, v]) => (
          <Tilt key={k}>
            <div style={{ padding: 28 }}>
              <h3>{k}</h3>
              <div className="pills">
                {v.map((x) => (
                  <span className="pill" key={x}>{x}</span>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
