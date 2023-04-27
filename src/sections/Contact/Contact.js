import "./Contact.css";
import { motion } from "framer-motion";

import { networks } from "../../assets/Data";
import ContactForm from "./ContactForm";

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
      <div className="contactForm">
        <ContactForm />
      </div>
      <div className="networks">
        {networks.map((network, index) => {
          return (
            <motion.a
              rel="noreferrer"
              key={index}
              href={network.link}
              target="_blank"
              initial={{
                background: "#fff",
                color: "var(--secondary)",
                scale: 1,
                zIndex: 1,
              }}
              whileHover={{
                background: network.color,
                color: "#fff",
                scale: 0.92,
                zIndex: 2,
              }}
              transition={{ duration: 0.2 }}
            >
              {network.icon}
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
