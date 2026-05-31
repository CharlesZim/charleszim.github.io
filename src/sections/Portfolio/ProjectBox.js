import "./ProjectBox.css";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const ProjectBox = ({ project, index, setPhoto }) => {
  return (
    <motion.article
      className="projectCard glass"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      onClick={() => setPhoto(project.img)}
    >
      <div className="projectThumb">
        <img src={project.img} alt={project.name} className="projectImg" loading="lazy" />
        <span className="projectZoom">
          <HiArrowUpRight />
        </span>
      </div>
      <div className="projectBody">
        <h3 className="projectName">{project.name}</h3>
        <p className="projectDesc">{project.desc}</p>
      </div>
    </motion.article>
  );
};

export default ProjectBox;
