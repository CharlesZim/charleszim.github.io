import { useState } from "react";

import "./Portfolio.css";
import { portfolio } from "../../assets/Data";

import ProjectBox from "./ProjectBox";

import { motion, AnimatePresence } from "framer-motion";

const Portfolio = ({ setPhoto }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="portfolio" id="portfolio">
      <motion.div
        className="portfolioHead"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">Portfolio</span>
        <h1>Selected work.</h1>
      </motion.div>

      <div className="segmented" role="tablist">
        {portfolio.map((item, index) => (
          <button
            key={index}
            className={`segItem ${activeCategory === index ? "segActive" : ""}`}
            onClick={() => setActiveCategory(index)}
          >
            {item.name}
          </button>
        ))}
        <span
          className="segThumb"
          style={{
            width: `calc((100% - 10px) / ${portfolio.length})`,
            left: `calc(5px + ${activeCategory} * (100% - 10px) / ${portfolio.length})`,
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="portfolioGrid"
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {portfolio[activeCategory].projects.map((item, index) => (
            <ProjectBox
              key={item.name}
              project={item}
              index={index}
              setPhoto={setPhoto}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
