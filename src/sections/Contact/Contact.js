import "./Contact.css";
import { motion } from "framer-motion";

import { networks } from "../../assets/Data";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contactGrid">
        <motion.div
          className="contactIntro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Contact</span>
          <h1>Let's build something great.</h1>
          <p>
            Have a project in mind or just want to say hi? Drop me a message and
            I'll get back to you within 24 hours.
          </p>

          <a className="contactEmail" href="mailto:contact@charles-zimmerlin.com">
            contact@charles-zimmerlin.com
          </a>

          <div className="networks">
            {networks.map((network, index) => (
              <motion.a
                rel="noreferrer"
                key={index}
                href={network.link}
                target="_blank"
                aria-label={network.name}
                className="networkBtn"
                whileHover={{ y: -3 }}
                style={{ "--net-color": network.color }}
              >
                {network.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contactFormCard glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
