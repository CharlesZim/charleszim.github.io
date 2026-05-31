import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import "./ServiceBox.css";

const ServiceBox = ({ service, index }) => {
  return (
    <motion.div
      className="serviceCard glass"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
    >
      <div className="serviceIcon">{service.icon}</div>
      <h3 className="serviceTitle">{service.title}</h3>
      <p className="serviceDescription">{service.description}</p>
      <Link href="#" to="contact" offset={-90} className="serviceLink">
        Let's work together <HiArrowRight />
      </Link>
    </motion.div>
  );
};

export default ServiceBox;
