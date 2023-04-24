import { Link } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import "./ServiceBox.css";

const ServiceBox = ({ service, index }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? -30 : -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: completed ? 0 : 0.3 + index * 0.12,
        duration: completed ? 0.3 : 0.08,
        type: "spring",
        stiffness: completed ? 300 : 100,
      }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      onAnimationComplete={() => setCompleted(true)}
      className="boxSer"
    >
      <div className="serviceBox">
        <div className="serviceTop">
          <div className="serviceIcon">{service.icon}</div>
          <div className="serviceTitle">{service.title}</div>
        </div>
        <div className="serviceDescription">{service.description}</div>
        <Link href="/contact" to="contact" className="hireMe">
          Let's Work Together
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceBox;
