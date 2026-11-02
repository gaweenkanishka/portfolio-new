import { useRef } from "react";

// Glass card that tilts toward the pointer and shows a light spot.
export default function Tilt({ className = "", children }) {
  const ref = useRef(null);

  const onPointerMove = (e) => {
    const el = ref.current;
    const b = el.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width;
    const y = (e.clientY - b.top) / b.height;
    const s = el.style;
    s.setProperty("--ry", ((x - 0.5) * 12).toFixed(2) + "deg");
    s.setProperty("--rx", ((0.5 - y) * 12).toFixed(2) + "deg");
    s.setProperty("--gx", x * 100 + "%");
    s.setProperty("--gy", y * 100 + "%");
    s.setProperty("--lit", 1);
  };

  const onPointerLeave = () => {
    const s = ref.current.style;
    s.setProperty("--rx", "0deg");
    s.setProperty("--ry", "0deg");
    s.setProperty("--lit", 0);
  };

  return (
    <div
      ref={ref}
      className={"glass tilt " + className}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
