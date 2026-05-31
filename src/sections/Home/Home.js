import Button from "../../components/Button";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

import "./Home.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "8+", label: "Products shipped" },
  { value: "5★", label: "App Store rated" },
  { value: "iOS", label: "Native & cross-platform" },
];

const Home = () => {
  return (
    <section className="home" id="home">
      <motion.div
        className="homeInner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="availability" variants={item}>
          <span className="pulse" />
          Available for freelance projects
        </motion.div>

        <motion.h1 className="homeHeadline" variants={item}>
          I build <span className="grad">iOS apps</span> &amp; digital products
          <br className="hideMobile" /> people love to use.
        </motion.h1>

        <motion.p className="homeSub" variants={item}>
          Charles Zimmerlin — freelance iOS Software Engineer &amp; founder based in
          Colmar, France. From first sketch to the App Store, with Swift, React
          Native and thoughtful design.
        </motion.p>

        <motion.div className="homeCtas" variants={item}>
          <Button
            to="contact"
            title="Start a project"
            variant="primary"
            icon={<HiArrowRight />}
          />
          <Button to="portfolio" title="View my work" variant="ghost" />
        </motion.div>

        <motion.div className="homeStats" variants={item}>
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <span className="statValue">{s.value}</span>
              <span className="statLabel">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
