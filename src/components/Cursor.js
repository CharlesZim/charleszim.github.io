import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Cursor.css";

const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor");
    return () => document.body.classList.remove("custom-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const t = e.target.closest && e.target.closest("[data-cursor]");
      if (t) {
        setVariant(t.getAttribute("data-cursor") || "hover");
        setLabel(t.getAttribute("data-cursor-label") || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div className={`cursor cursor-${variant}`} style={{ x: sx, y: sy }} aria-hidden="true">
      <span className="cursorDot" />
      {label ? <span className="cursorLabel">{label}</span> : null}
    </motion.div>
  );
};

export default Cursor;
