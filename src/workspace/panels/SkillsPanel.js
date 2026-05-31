import { motion } from "framer-motion";
import PanelShell from "../PanelShell";
import { skills } from "../../assets/Data";

const SkillsPanel = ({ onBack }) => {
  return (
    <PanelShell tag="03" kicker="Stack" title="The full toolkit" onBack={onBack}>
      <div className="skillsGrid">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.type}
            className="skillCard glass"
            style={{ "--card-accent": cat.stroke }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <div className="skillCardHead">
              <span className="skillDot" />
              <h3>{cat.type}</h3>
            </div>
            <div className="skillChips">
              {cat.skills.map((s) => (
                <span className="skillChip" key={s.name}>
                  {s.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PanelShell>
  );
};

export default SkillsPanel;
