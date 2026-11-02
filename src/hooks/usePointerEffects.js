import { useEffect } from "react";

// Drives the parallax variables (--nx / --ny on <html>) and the glass "lens" cursor.
// Idles into a slow automatic drift when the pointer hasn't moved for a few seconds.
export default function usePointerEffects(lensRef) {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const lens = lensRef.current;
    let tx = 0, ty = 0, nx = 0, ny = 0;
    let px = innerWidth / 2, py = innerHeight / 2;
    let lx = px, ly = py, s = 1, big = false, last = -1e5, raf;

    const onMove = (e) => {
      px = e.clientX;
      py = e.clientY;
      tx = (px / innerWidth - 0.5) * 2;
      ty = (py / innerHeight - 0.5) * 2;
      last = performance.now();
      lens.classList.add("on");
      root.classList.add("cc");
    };
    const onOver = (e) => {
      big = !!(e.target.closest && e.target.closest("a,.tilt,.pill"));
    };
    const onLeave = () => lens.classList.remove("on");

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerover", onOver, { passive: true });
    root.addEventListener("mouseleave", onLeave);

    const loop = (t) => {
      if (t - last > 3500) {
        tx = Math.sin(t / 4200) * 0.7;
        ty = Math.cos(t / 5300) * 0.5;
      }
      nx += (tx - nx) * 0.06;
      ny += (ty - ny) * 0.06;
      lx += (px - lx) * 0.4;
      ly += (py - ly) * 0.4;
      s += ((big ? 2.2 : 1) - s) * 0.2;
      root.style.setProperty("--nx", nx.toFixed(3));
      root.style.setProperty("--ny", ny.toFixed(3));
      lens.style.transform =
        "translate3d(" + lx.toFixed(1) + "px," + ly.toFixed(1) + "px,0) translate(-50%,-50%) scale(" + s.toFixed(3) + ")";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerover", onOver);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [lensRef]);
}
