import { services } from "../../assets/Data";
import { motion } from "framer-motion";
import "./Services.css";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section className="services">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        Technical Expertise
      </motion.h1>
      <div className="servicesCont">
        {services.map((service, index) => (
          <ServiceBox key={index} index={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
