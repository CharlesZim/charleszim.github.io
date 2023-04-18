import "./Home.css";

import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const Home = () => {
  const parallax = useParallax({
    speed: -50,
  });
  return (
    <section className="home">
      <motion.div
        transition={{
          ease: "easeInOut",
          delay: 0.3,
          duration: 0.5,
        }}
        initial={{ opacity: 0, transform: "translateX(50px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        viewport={{ once: true }}
        className="circleRed"
        ref={parallax.ref}
      ></motion.div>
    </section>
  );
};

export default Home;
