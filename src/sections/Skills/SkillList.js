import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../assets/Data";

import "./SkillList.css";

const SkillList = () => {
  return (
    <div className="skillsGrid">
      {skills.map((category, index) => (
        <motion.div
          key={index}
          className="skillCard glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          style={{ "--card-accent": category.stroke }}
        >
          <div className="skillCardHead">
            <span className="skillDot" />
            <h3>{category.type}</h3>
          </div>
          <div className="skillChips">
            {category.skills.map((skill, id) => (
              <span className="skillChip" key={id}>
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillList;
