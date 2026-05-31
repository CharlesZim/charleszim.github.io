import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Starfield from "../components/Starfield";
import Cursor from "../components/Cursor";
import BriefDock from "../components/BriefDock";
import PhotoFull from "../components/PhotoFull";

import Hub from "./Hub";
import { NODES } from "./nodes";
import AboutPanel from "./panels/AboutPanel";
import WorkPanel from "./panels/WorkPanel";
import SkillsPanel from "./panels/SkillsPanel";
import ExpertisePanel from "./panels/ExpertisePanel";
import ContactPanel from "./panels/ContactPanel";

import "./Workspace.css";

const PANELS = {
  about: AboutPanel,
  work: WorkPanel,
  skills: SkillsPanel,
  expertise: ExpertisePanel,
  contact: ContactPanel,
};

const center = () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

const Workspace = () => {
  const [view, setView] = useState("hub");
  const [origin, setOrigin] = useState(center);
  const [photo, setPhoto] = useState(null);
  const [compact, setCompact] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const apply = () => setCompact(mq.matches);
    apply();
    mq.addEventListener ? mq.addEventListener("change", apply) : mq.addListener(apply);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", apply) : mq.removeListener(apply);
  }, []);

  const goto = useCallback((key, e) => {
    if (e && e.currentTarget) {
      const r = e.currentTarget.getBoundingClientRect();
      setOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    } else {
      setOrigin(center());
    }
    setView(key);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  const back = useCallback(() => setView("hub"), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && view !== "hub") {
        if (photo) setPhoto(null);
        else back();
        return;
      }
      if (view === "hub" && /^[1-5]$/.test(e.key)) {
        const node = NODES[Number(e.key) - 1];
        if (node) goto(node.key);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, photo, back, goto]);

  const Panel = view !== "hub" ? PANELS[view] : null;

  return (
    <div className="workspace">
      <Starfield />
      <Cursor />

      <div className="topbar">
        <button
          className="brand"
          onClick={back}
          data-cursor="hover"
          data-cursor-label={view === "hub" ? "" : "Hub"}
        >
          <span className="brandMark" />
          <span className="brandName">Charles Zimmerlin</span>
        </button>
        <span className="topbarHint">{view === "hub" ? "Press 1–5 · or pick a star" : "Esc to fly back"}</span>
      </div>

      <div className="stage">
        <AnimatePresence mode="wait">
          {view === "hub" ? (
            <Hub key="hub" onSelect={goto} compact={compact} />
          ) : (
            <motion.div
              key={view}
              ref={scrollRef}
              className="panelViewport"
              initial={{
                opacity: 0,
                scale: 0.32,
                x: origin.x - window.innerWidth / 2,
                y: origin.y - window.innerHeight / 2,
              }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Panel onBack={back} onGoto={(k) => goto(k)} setPhoto={setPhoto} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BriefDock onOpenContact={() => goto("contact")} />

      <Link className="privacyLink" to="/confidentiality" data-cursor="hover">
        Privacy · © {new Date().getFullYear()}
      </Link>

      <PhotoFull photo={photo} setPhoto={setPhoto} />
    </div>
  );
};

export default Workspace;
