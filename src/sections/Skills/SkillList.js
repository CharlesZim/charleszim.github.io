import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../assets/Data";

import "./SkillList.css";

const SkillList = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="skillsList">
      {skills.map((skillType, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3 + index * 0.12,
              duration: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            key={index}
            className="skillsT"
            style={{ background: skillType.gradient }}
            onAnimationComplete={() => setCompleted(true)}
          >
            <div className="skillTitle">{skillType.type}</div>
            <div className="skillTypeCont">
              {skillType.skills.map((skill, id) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                    background: "#eeeeee22",
                    color: "#eeeeeecc",
                  }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: completed ? 0 : 0.3 + index * 0.12 + 0.2 + id * 0.12,
                    duration: completed ? 0.2 : 0.02,
                    type: completed ? "tween" : "spring",
                    stiffness: 50,
                    damping: 12,
                  }}
                  whileHover={{
                    background: "#eeeeeeaa",
                    color: "#8472ddff",
                    scale: 1.03,
                  }}
                  viewport={{ once: true }}
                  key={id}
                  className="skillItem"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillList;
