/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Link } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import Burger from "./Burger";

import cv from "../../assets/files/CV_Charles_Zimmerlin.pdf";
import logo from "../../assets/images/logo.webp";
import "./Header.css";

import { headerItems } from "../../assets/Data";

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

  const navItems = headerItems.filter((item) => item.path !== "resume");

  return (
    <motion.header
      className="header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navShell glass">
        <div className="navLeft">
          <Burger />
          <Link to={"home"} className="brand" offset={-90} href="#">
            <img src={logo} alt="Charles Zimmerlin" className="logo" width={34} height={34} />
            <span className="brandName">Charles Zimmerlin</span>
          </Link>
        </div>

        <nav className="navLinks">
          {navItems.map((item, index) => (
            <Link
              href="#"
              to={item.path}
              key={index}
              className="navLink"
              offset={-90}
              spy={true}
              activeClass="navLinkActive"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="navCta" onClick={handleDownload}>
          Resume
          <BsDownload className="navCtaIcon" />
        </button>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </motion.header>
  );
};

export default Header;
