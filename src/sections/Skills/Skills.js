import SkillList from "./SkillList";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skillsHead"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">Skills</span>
        <h1>A full-stack toolkit, mobile-first.</h1>
        <p>
          Everything I need to take a product from idea to launch — and keep it
          running in production.
        </p>
      </motion.div>
      <SkillList />
    </section>
  );
};

export default Skills;
