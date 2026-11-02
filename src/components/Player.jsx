import { useEffect, useRef } from "react";
import { VCOL } from "../data/videos.js";

// Modal YouTube player (privacy-enhanced embed). Esc or backdrop click closes it.
export default function Player({ video: o, index: i, onClose }) {
  const closeBtn = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const prevOverflow = document.body.style.overflow;
    root.classList.add("mo");
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeBtn.current && closeBtn.current.focus();
    return () => {
      root.classList.remove("mo");
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const m = /t=(\d+)/.exec(o.x || "");
  const start = m ? "&start=" + m[1] : "";
  const [a, b] = VCOL[i % 6];

  return (
    <div className="mdl" onClick={onClose}>
      <div className="glass" role="dialog" aria-modal="true" aria-label={o.t} onClick={(e) => e.stopPropagation()}>
        <div className="mhead">
          <h3>{o.t}</h3>
          <button className="mx" ref={closeBtn} onClick={onClose} aria-label="Close video">×</button>
        </div>
        <div className="pl" style={{ "--a": a, "--b": b }}>
          <iframe
            src={"https://www.youtube-nocookie.com/embed/" + o.v + "?autoplay=1&rel=0&modestbranding=1" + start}
            title={o.t}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="mfoot">
          <span>{o.c}</span>
          <a className="btn" href={"https://www.youtube.com/watch?v=" + o.v + (o.x || "")} target="_blank" rel="noopener noreferrer">
            Open on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
