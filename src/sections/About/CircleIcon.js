import "./CircleIcon.css";

import { motion } from "framer-motion";

const CircleIcon = (props) => {
  let icon = props.icon || null;
  let index = props.index || 0;
  let completed = props.completed || false;
  let setCompleted = props.setCompleted || null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.07 }}
      transition={{
        delay: completed ? 0 : 0.3 + index * 0.2,
        duration: completed ? 0.3 : 0.05,
        type: "spring",
        stiffness: completed ? 300 : 100,
      }}
      viewport={{ once: true }}
      className="circleCont"
      onAnimationComplete={() => setCompleted(true)}
    >
      {icon}
    </motion.div>
  );
};

export default CircleIcon;
