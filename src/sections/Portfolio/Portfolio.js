import { useState } from "react";

import "./Portfolio.css";
import { portfolio } from "../../assets/Data";

import ProjectBox from "./ProjectBox";

import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolioSection">
        <div className="switchCont">
          <div className="switch">
            {
              <div
                className={`switchItem ${
                  portfolio.length === 1 ? "lastItem" : ""
                }`}
                onClick={() => {
                  setActiveCategory(0);
                }}
                style={{
                  color: activeCategory === 0 ? "var(--blue1)" : "",
                  fontWeight: activeCategory === 0 ? "bold" : "",
                }}
              >
                {portfolio[0].name}
              </div>
            }
            {portfolio.slice(1).map((item, index) => (
              <div key={index}>
                <span />
                <div
                  className={`switchItem ${
                    index === portfolio.length - 2 ? "lastItem" : ""
                  }`}
                  style={{
                    color: activeCategory === index + 1 ? "var(--blue1)" : "",
                    fontWeight: activeCategory === index + 1 ? "bold" : "",
                  }}
                  onClick={() => {
                    setActiveCategory(index + 1);
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*<div className="portfolioCont">
          {portfolio[activeCategory].projects.map((item, index) => (
            <ProjectBox key={index} project={item} index={index} />
          ))}
          </div>*/}
        <AnimatePresence mode="wait">
          <motion.div
            className="portfolioCont"
            key={activeCategory}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {portfolio[activeCategory].projects.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectBox project={item} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
