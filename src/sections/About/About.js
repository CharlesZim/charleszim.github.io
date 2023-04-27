import CircleIcon from "./CircleIcon";
import { useParallax } from "react-scroll-parallax";
import { useState } from "react";
import "./About.css";

import charles from "../../assets/images/charlesP.webp";

import Arrow from "./Arrow";
import { motion } from "framer-motion";
import { hobbies } from "../../assets/Data";

const About = ({ setPhoto }) => {
  const parallax = useParallax({
    speed: -2,
  });

  const [completed, setCompleted] = useState(false);
  return (
    <section className="about">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        About me
      </motion.h1>
      <div className="aboutSection">
        <div className="aboutLeft ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="aboutPicCont"
            ref={parallax.ref}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{
                delay: completed ? 0 : 0.3,
                duration: completed ? 0.3 : 0.08,
                type: "spring",
                stiffness: completed ? 220 : 100,
              }}
              viewport={{ once: true }}
              className="aboutPic"
            >
              <img
                width={100}
                height={100}
                src={charles}
                alt="Charles ZimMerlin"
                className="myPic"
                onClick={() => {
                  setPhoto(charles);
                }}
              />
            </motion.div>
          </motion.div>
          <div className="border"></div>
        </div>
        <div className="aboutRight">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            Charles Zimmerlin
          </motion.h2>
          <motion.div
            className="aboutText"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            I am a{" "}
            <motion.div
              initial={{ opacity: 0, scale: 0, display: "inline-block" }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.1,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              viewport={{ once: true }}
              className="bold"
            >
              Full-Stack Software Engineer
            </motion.div>{" "}
            working in Freelance, based in Strasbourg, France. My expertise
            includes project management,{" "}
            <motion.div
              initial={{ opacity: 0, scale: 0, display: "inline-block" }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.1,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              viewport={{ once: true }}
              className="bold"
            >
              frontend
            </motion.div>{" "}
            and{" "}
            <motion.div
              initial={{ opacity: 0, scale: 0, display: "inline-block" }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.1,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              viewport={{ once: true }}
              className="bold"
            >
              backend
            </motion.div>{" "}
            development using mainly React, React Native, Angular, Java,
            Node.js, and Python. I am certified in{" "}
            <motion.div
              initial={{ opacity: 0, scale: 0, display: "inline-block" }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.1,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              viewport={{ once: true }}
              className="bold"
            >
              Google UX Design
            </motion.div>{" "}
            and{" "}
            <motion.div
              initial={{ opacity: 0, scale: 0, display: "inline-block" }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.1,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              viewport={{ once: true }}
              className="bold"
            >
              IBM Cybersecurity Analysis
            </motion.div>
            . My interests outside of work include music, fitness and travel.
          </motion.div>
          <div className="aboutIcons">
            {hobbies.map((hobby, index) => (
              <CircleIcon
                key={index}
                icon={hobby.icon}
                index={index}
                completed={completed}
                setCompleted={setCompleted}
              />
            ))}
          </div>
        </div>
      </div>
      <Arrow />
    </section>
  );
};

export default About;
