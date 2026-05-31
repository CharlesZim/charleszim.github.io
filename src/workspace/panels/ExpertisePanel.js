import { motion } from "framer-motion";
import { HiOutlinePlus, HiCheck } from "react-icons/hi";
import PanelShell from "../PanelShell";
import { services } from "../../assets/Data";
import { useBrief } from "../../context/BriefContext";

const ExpertisePanel = ({ onBack }) => {
  const { brief, dispatch } = useBrief();

  return (
    <PanelShell tag="04" kicker="Services" title="How I can help" onBack={onBack}>
      <p className="panelLede">
        Tap what fits — each one drops straight into your brief.
      </p>
      <div className="servicesGrid">
        {services.map((service, i) => {
          const picked = brief.services.includes(service.title);
          return (
            <motion.button
              key={service.title}
              className={`serviceCard glass ${picked ? "serviceCardOn" : ""}`}
              onClick={() => dispatch({ type: "service", value: service.title })}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -6 }}
              data-cursor="add"
              data-cursor-label={picked ? "Saved" : "Add"}
            >
              <div className="serviceIcon">{service.icon}</div>
              <h3 className="serviceTitle">{service.title}</h3>
              <p className="serviceDescription">{service.description}</p>
              <span className="servicePick">
                {picked ? <HiCheck /> : <HiOutlinePlus />}
                {picked ? "In your brief" : "Add to brief"}
              </span>
            </motion.button>
          );
        })}
      </div>
    </PanelShell>
  );
};

export default ExpertisePanel;
