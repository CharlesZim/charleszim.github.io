import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePlus, HiCheck } from "react-icons/hi";
import PanelShell from "../PanelShell";
import { portfolio } from "../../assets/Data";
import { useBrief } from "../../context/BriefContext";

const WorkPanel = ({ onBack, setPhoto }) => {
  const [cat, setCat] = useState(0);
  const { brief, dispatch } = useBrief();

  return (
    <PanelShell tag="02" kicker="Work" title="Selected work" onBack={onBack}>
      <div className="segmented" style={{ "--seg-count": portfolio.length }}>
        {portfolio.map((item, i) => (
          <button
            key={item.name}
            className={`segItem ${cat === i ? "segActive" : ""}`}
            onClick={() => setCat(i)}
            data-cursor="hover"
          >
            {item.name}
          </button>
        ))}
        <span
          className="segThumb"
          style={{
            width: `calc((100% - 10px) / ${portfolio.length})`,
            left: `calc(5px + ${cat} * (100% - 10px) / ${portfolio.length})`,
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="workGrid"
          key={cat}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          {portfolio[cat].projects.map((p, i) => {
            const saved = brief.projects.includes(p.name);
            return (
              <motion.article
                className="workCard glass"
                key={p.name}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <button
                  className="workThumb"
                  onClick={() => setPhoto(p.img)}
                  data-cursor="hover"
                  data-cursor-label="View"
                >
                  <img src={p.img} alt={p.name} loading="lazy" />
                </button>
                <div className="workBody">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <button
                    className={`addBtn ${saved ? "addBtnOn" : ""}`}
                    onClick={() => dispatch({ type: "project", value: p.name })}
                    data-cursor="add"
                    data-cursor-label={saved ? "Saved" : "Add"}
                  >
                    {saved ? <HiCheck /> : <HiOutlinePlus />}
                    {saved ? "In your brief" : "Add to brief"}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </PanelShell>
  );
};

export default WorkPanel;
