import portrait from "../assets/portrait.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <h1>Gaween</h1>
        <p className="lead">
          Full-stack developer and digital marketer. I build <b>web products</b> and the content that gets them seen.
        </p>
        <div className="row">
          <a className="btn main" href="#videos">Watch my videos</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="stack">
        <span className="chip" style={{ top: 0, right: "6%", "--d": -34 }}>Next.js</span>
        <span className="chip" style={{ top: "46%", left: "-2%", "--d": -52 }}>MERN</span>
        <span className="chip" style={{ bottom: 0, left: "18%", "--d": -28 }}>Veo 3</span>

        <div className="plane">
          <div className="halo" />
          <div className="ring" />
          <div className="glass ph">
            <div className="phin">
              <img src={portrait} alt="Portrait of Gaween" width={640} height={800} decoding="async" />
            </div>
          </div>
          <div className="glass pnl p2">
            <div className="k">Shipping now</div>
            <div className="big">Aviation Voice forum site</div>
            <div className="meter"><i /></div>
          </div>
          <div className="glass pnl p3">
            <div className="big">Gavik</div>
            <div className="k">Freelance studio · Gampaha, Sri Lanka</div>
            <div style={{ marginTop: 10 }}>
              <span className="dot" />
              Open for projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
