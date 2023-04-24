import MovingItems from "./MovingItems";
import SkillList from "./SkillList";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>
      <div className="skillCont">
        <MovingItems />
        <SkillList />
      </div>
    </section>
  );
};

export default Skills;
