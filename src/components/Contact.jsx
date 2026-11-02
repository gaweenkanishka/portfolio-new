import Tilt from "./Tilt.jsx";
import { CONFIG } from "../config.js";

export default function Contact() {
  const links = [
    ["Email", CONFIG.email && "mailto:" + CONFIG.email],
    ["WhatsApp", CONFIG.whatsapp && "https://wa.me/" + CONFIG.whatsapp],
    ["LinkedIn", CONFIG.linkedin],
    ["GitHub", CONFIG.github],
  ].filter((l) => l[1]);

  return (
    <section id="contact">
      <Tilt className="contact">
        <h2>Have a project in mind?</h2>
        <p className="sub" style={{ margin: "0 auto" }}>
          I take on websites, web apps and content campaigns from Sri Lanka, for clients anywhere.
        </p>
        <div className="row">
          {links.length ? (
            links.map((l, i) => (
              <a key={l[0]} className={"btn" + (i ? "" : " main")} href={l[1]} target="_blank" rel="noopener noreferrer">
                {l[0]}
              </a>
            ))
          ) : (
            <span className="pill">Gampaha, Sri Lanka</span>
          )}
        </div>
      </Tilt>
      <footer>© {new Date().getFullYear()} Gavik. Built with React.</footer>
    </section>
  );
}
