import Button from "../../components/Button";
import { motion } from "framer-motion";

import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="homeTitle">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="topTitle"
        >
          I'm a
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="bottomTitle"
        >
          <span className="textTitle">
            Full-Stack
            <br />
            Software
            <br />
            Engineer
          </span>
          <span className="dotTitle">.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="buttonHome"
        >
          <Button to={"about"} title={"Discover me"} />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
