import { useEffect, useState } from "react";
import { NAV } from "../config.js";

// Floating nav that highlights the section currently in view.
export default function Dock() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="glass dock" aria-label="Sections">
      {NAV.map(([id, label]) => (
        <a key={id} href={"#" + id} className={active === id ? "act" : ""}>
          {label}
        </a>
      ))}
    </nav>
  );
}
