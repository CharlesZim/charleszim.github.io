/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";

import Burger from "./Burger";

import cv from "../../assets/files/CV_Charles_Zimmerlin.pdf";
import "./Header.css";

import { headerItems } from "../../assets/Data.js";

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.target = "_blank";
    link.click();
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.01,
  });

  const controls = useAnimation();
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
      });
    }
  }, [controls, isInitialRender]);

  return (
    <motion.div initial={{ y: -10, opacity: 0 }} animate={controls}>
      <header>
        <div className="header">
          <div className="headerLeft">
            <Burger />
            <Link to={"home"} className="leftTitle" offset={-60} href="#">
              C. Zimmerlin
            </Link>
          </div>
          <div className="headerRight">
            {headerItems.map((category, index) => {
              return (
                <Link
                  href="#"
                  onClick={() =>
                    category.path === "resume" ? handleDownload() : ""
                  }
                  to={category.path === "resume" ? "" : category.path}
                  key={index}
                  className="headerElem"
                  offset={-60}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
        <motion.div className="progress-bar" style={{ scaleX }} />
      </header>
    </motion.div>
  );
};

export default Header;
