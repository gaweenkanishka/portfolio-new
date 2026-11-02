const ORBS = [
  { width: 520, height: 520, left: "-8%", top: "4%", background: "radial-gradient(circle,#7b6bff,transparent 70%)", "--d": -70 },
  { width: 480, height: 480, right: "-6%", top: "28%", background: "radial-gradient(circle,#ff6ad5,transparent 70%)", "--d": 55 },
  { width: 420, height: 420, left: "34%", bottom: "-10%", background: "radial-gradient(circle,#5de4ff,transparent 70%)", "--d": -40 },
];

export default function Background() {
  return (
    <div className="stage" aria-hidden="true">
      {ORBS.map((style, i) => (
        <div key={i} className="orb" style={style} />
      ))}
      <div className="floor" />
    </div>
  );
}
