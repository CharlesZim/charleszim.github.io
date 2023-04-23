import React, { useState } from "react";

import { skills } from "../../assets/Data";

import "./SkillList.css";

const SkillList = () => {
  const [activeId, setActiveId] = useState(null);
  return (
    <ul className="skillsList">
      {skills.map((skillType, index) => {
        return (
          <div
            key={index}
            className="skillsT"
            style={{ background: skillType.gradient }}
          >
            <div className="skillTitle">{skillType.type}</div>
            <div className="skillTypeCont">
              {skillType.skills.map((skill, id) => (
                <div
                  onMouseEnter={() => setActiveId(skill.name)}
                  onMouseLeave={() => setActiveId(null)}
                  key={id}
                  className="skillItem"
                  style={{
                    color:
                      activeId === skill.name
                        ? "var(--secondary)"
                        : "#eeeeeecc",
                    background:
                      activeId === skill.name ? "#eeeeeeaa" : "#eeeeee22",
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default SkillList;
