import "./Contact.css";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="contact">
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
        Contact
      </motion.h1>
    </section>
  );
};

export default Contact;
