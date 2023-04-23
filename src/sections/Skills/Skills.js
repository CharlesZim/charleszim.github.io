import MovingItems from "./MovingItems";
import SkillList from "./SkillList";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skillCont">
        <MovingItems />
        <SkillList />
      </div>
    </section>
  );
};

export default Skills;
