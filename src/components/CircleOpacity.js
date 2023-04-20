import "../App.css";

import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const CircleOpacity = (props) => {
  const parallax = useParallax({
    speed: -20,
  });
  let color = props.color || "rgba(255,0,0,0.2)";
  let section = props.section || 0;
  let left = props.left || false;
  return (
    <div
      className="opacDiv"
      style={{
        background:
          "linear-gradient(150deg, " + color + " 0%, rgba(255,0,255,0) 80%)",
        top: 40 + section * 150 + "vh",
      }}
      ref={parallax.ref}
    >
      <motion.div
        className="circleOpacity"
        transition={{
          ease: "easeInOut",
          delay: 0.1,
          duration: 0.5,
        }}
        initial={{
          opacity: 0,
          transform: "translateX(" + (left ? "-" : "") + "50px)",
        }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};

export default CircleOpacity;
