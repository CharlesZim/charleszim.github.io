import { motion } from "framer-motion";
import { useBrief } from "../context/BriefContext";
import { NODES, ringPos } from "./nodes";

const GOALS = [
  "An iOS app",
  "A cross-platform app",
  "A website",
  "An MVP, fast",
  "A redesign",
];

const Hub = ({ onSelect, compact }) => {
  const { brief, dispatch } = useBrief();

  const core = (
    <div className="hubCore">
      <div className="availability">
        <span className="pulse" />
        Available for freelance projects
      </div>
      <h1 className="hubName">Charles Zimmerlin</h1>
      <p className="hubRole">iOS Software Engineer &amp; founder · Colmar, France</p>

      <div className="hubPrompt">
        <span className="hubPromptLabel">What are we building?</span>
        <div className="goalChips">
          {GOALS.map((g) => (
            <button
              key={g}
              className={`goalChip ${brief.goal === g ? "goalChipActive" : ""}`}
              onClick={() => dispatch({ type: "goal", value: g })}
              data-cursor="hover"
              data-cursor-label={brief.goal === g ? "Drop" : "Pick"}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (compact) {
    return (
      <motion.div
        className="hub hub-compact"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {core}
        <div className="nodeList">
          {NODES.map((node) => (
            <button
              key={node.key}
              className="nodeListItem"
              onClick={(e) => onSelect(node.key, e)}
            >
              <span className="nodeN">{node.n}</span>
              <span className="nodeListLabel">{node.label}</span>
              <span className="nodeHint">{node.hint}</span>
            </button>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="hub"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ring">
        <svg className="ringLines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {NODES.map((node, i) => {
            const p = ringPos(i, NODES.length);
            return (
              <line key={node.key} x1="50" y1="50" x2={p.x} y2={p.y} className="ringLine" />
            );
          })}
        </svg>

        {core}

        {NODES.map((node, i) => {
          const p = ringPos(i, NODES.length);
          return (
            <motion.button
              key={node.key}
              className="node"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onClick={(e) => onSelect(node.key, e)}
              data-cursor="link"
              data-cursor-label="Enter"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }}
            >
              <span className="nodeOrb" />
              <span className="nodeN">{node.n}</span>
              <span className="nodeLabel">{node.label}</span>
              <span className="nodeHint">{node.hint}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Hub;
