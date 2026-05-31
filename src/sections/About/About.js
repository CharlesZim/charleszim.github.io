import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import "./About.css";

import charles from "../../assets/images/charlesP.webp";
import { hobbies } from "../../assets/Data";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const certs = ["Google UX Design", "IBM DevOps & Software Engineer"];

const About = ({ setPhoto }) => {
  const parallax = useParallax({ speed: -6 });

  return (
    <section className="about" id="about">
      <div className="aboutGrid">
        <motion.div
          className="aboutMedia"
          ref={parallax.ref}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
        >
          <div className="aboutPhotoFrame" onClick={() => setPhoto(charles)}>
            <img src={charles} alt="Charles Zimmerlin" className="aboutPhoto" />
          </div>
          <div className="aboutBadge glass">
            <span className="aboutBadgeDot" />
            Founder &amp; iOS Engineer
          </div>
        </motion.div>

        <div className="aboutText">
          <motion.span
            className="eyebrow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            About
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            variants={reveal}
          >
            Charles Zimmerlin
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            variants={reveal}
          >
            I'm an <span className="bold">iOS Software Engineer</span> and founder
            based in Colmar, France, working end-to-end across{" "}
            <span className="bold">frontend</span> and{" "}
            <span className="bold">backend</span> — mostly with Swift, Core Data,
            React, React Native, Node.js and Python. I turn ideas into polished
            products that ship and scale.
          </motion.p>

          <motion.div
            className="aboutCerts"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            variants={reveal}
          >
            {certs.map((c, i) => (
              <span className="certChip" key={i}>
                {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="aboutHobbies"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={4}
            variants={reveal}
          >
            {hobbies.map((hobby, index) => (
              <div className="hobby" key={index}>
                <span className="hobbyIcon">{hobby.icon}</span>
                <span className="hobbyName">{hobby.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
