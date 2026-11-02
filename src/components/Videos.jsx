import { useState } from "react";
import Tilt from "./Tilt.jsx";
import Player from "./Player.jsx";
import { VIDEOS, VCOL } from "../data/videos.js";

export default function Videos() {
  const [cur, setCur] = useState(null);

  return (
    <section id="videos">
      <h2>Video work</h2>
      <p className="sub">A few of the videos I’ve worked on. Tap a card to watch it right here.</p>
      <div className="vgrid">
        {VIDEOS.map((o, i) => {
          const [a, b] = VCOL[i % 6];
          const url = "https://www.youtube.com/watch?v=" + o.v + (o.x || "");
          return (
            <Tilt key={o.v} className="vid">
              <a
                className="vlink"
                href={url}
                aria-label={"Play: " + o.t}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
                  e.preventDefault();
                  setCur(i);
                }}
              >
                <div className="vposter" style={{ "--a": a, "--b": b }}>
                  <img
                    src={"https://i.ytimg.com/vi/" + o.v + "/hqdefault.jpg"}
                    alt=""
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <span className="play">
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" fill="#fff" />
                    </svg>
                  </span>
                </div>
                <div className="vbody">
                  <h3>{o.t}</h3>
                  <p>{o.c}</p>
                </div>
              </a>
            </Tilt>
          );
        })}
      </div>
      {cur !== null && <Player video={VIDEOS[cur]} index={cur} onClose={() => setCur(null)} />}
    </section>
  );
}
