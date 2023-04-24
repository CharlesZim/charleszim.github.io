import "../App.css";

import { useParallax } from "react-scroll-parallax";

const CircleOpacity = (props) => {
  const parallax = useParallax({
    speed: -20,
  });
  let color = props.color || "rgba(255,0,0,0.2)";
  let section = props.section || 0;
  return (
    <div
      className="opacDiv"
      style={{
        background:
          "linear-gradient(150deg, " + color + " 0%, rgba(255,0,255,0) 80%)",
        top: 40 + section * 150 + "vh",
      }}
      ref={parallax.ref}
    ></div>
  );
};

export default CircleOpacity;
