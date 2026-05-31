import { services } from "../../assets/Data";
import { motion } from "framer-motion";
import "./Services.css";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section className="services" id="services">
      <motion.div
        className="servicesHead"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">Expertise</span>
        <h1>How I can help you ship.</h1>
        <p>Pick a starting point — or bring your own idea and we'll scope it together.</p>
      </motion.div>
      <div className="servicesCont">
        {services.map((service, index) => (
          <ServiceBox key={index} index={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
