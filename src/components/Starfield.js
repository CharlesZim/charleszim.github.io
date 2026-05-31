import { useEffect, useRef } from "react";

// A generative constellation that drifts and reacts to the pointer with
// depth parallax. Purely ambient; safe to fail (guards for no 2d context).
const Starfield = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let ctx = null;
    try {
      ctx = canvas.getContext && canvas.getContext("2d");
    } catch (e) {
      ctx = null;
    }
    if (!ctx) return;

    let raf;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let pts = [];
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const count = () => Math.min(96, Math.floor((w * h) / 17000));

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mouse.x = mouse.tx = w / 2;
      mouse.y = mouse.ty = h / 2;
      pts = Array.from({ length: count() }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        z: Math.random() * 0.7 + 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const px = (mouse.x - w / 2) / w;
      const py = (mouse.y - h / 2) / h;

      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0) p.x += w;
        if (p.x > w) p.x -= w;
        if (p.y < 0) p.y += h;
        if (p.y > h) p.y -= h;
        const sx = p.x + px * 46 * p.z;
        const sy = p.y + py * 46 * p.z;
        ctx.beginPath();
        ctx.arc(sx, sy, p.z * 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 178, 255, ${0.1 + p.z * 0.28})`;
        ctx.fill();
      }

      const max = 128;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < max * max) {
            const o = (1 - Math.sqrt(d2) / max) * 0.16;
            ctx.strokeStyle = `rgba(124, 142, 255, ${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x + px * 46 * a.z, a.y + py * 46 * a.z);
            ctx.lineTo(b.x + px * 46 * b.z, b.y + py * 46 * b.z);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    init();
    draw();
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
};

export default Starfield;
