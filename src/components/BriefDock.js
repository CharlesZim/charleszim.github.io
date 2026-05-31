import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSparkles, HiArrowRight, HiX } from "react-icons/hi";
import { useBrief } from "../context/BriefContext";

const BriefDock = ({ onOpenContact }) => {
  const { brief, dispatch, count } = useBrief();
  const [open, setOpen] = useState(false);

  const chips = [
    ...(brief.goal ? [{ type: "goal", value: brief.goal }] : []),
    ...brief.services.map((value) => ({ type: "service", value })),
    ...brief.projects.map((value) => ({ type: "project", value })),
  ];

  return (
    <div className="dock">
      <AnimatePresence>
        {open && count > 0 && (
          <motion.div
            className="dockSheet glass"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="dockSheetTop">
              <span className="dockSheetTitle">Your brief, assembling…</span>
              <button className="dockReset" onClick={() => dispatch({ type: "reset" })}>
                Clear
              </button>
            </div>
            <div className="dockChips">
              {chips.map((c, i) => (
                <button
                  key={i}
                  className={`dockChip dockChip-${c.type}`}
                  onClick={() => dispatch({ type: c.type, value: c.value })}
                  data-cursor="hover"
                  data-cursor-label="Remove"
                >
                  {c.value} <HiX />
                </button>
              ))}
            </div>
            <button
              className="dockCompose"
              onClick={() => {
                setOpen(false);
                onOpenContact();
              }}
              data-cursor="link"
              data-cursor-label="Send"
            >
              Compose my message <HiArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="dockPill glass"
        onClick={() => (count > 0 ? setOpen((o) => !o) : onOpenContact())}
        data-cursor="hover"
        data-cursor-label={count > 0 ? "Review" : "Start"}
        whileHover={{ y: -2 }}
      >
        <HiOutlineSparkles className="dockSpark" />
        <span className="dockPillText">
          {count > 0 ? "Your brief" : "Start a brief"}
        </span>
        {count > 0 && <span className="dockCount">{count}</span>}
      </motion.button>
    </div>
  );
};

export default BriefDock;
