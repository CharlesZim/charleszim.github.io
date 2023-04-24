import "./ProjectBox.css";
import { motion } from "framer-motion";
const ProjectBox = ({ project, index, setPhoto }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.2 + index * 0.05,
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="projectBox"
      style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
    >
      <div
        className={`projectLeft ${index % 2 === 0 ? "leftBox" : "rightBox"}`}
      >
        <div className="projectContent">
          <div className="projectTitle">{project.name}</div>
          <p className="projectDesc">{project.desc}</p>
        </div>
      </div>
      <div
        className={`projectRight ${index % 2 === 0 ? "rightBox" : "leftBox"}`}
      >
        <div className="projectPicCont">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{
              delay: 0,
              duration: 0.3,
              type: "spring",
              stiffness: 220,
            }}
            className="projectPic"
            onClick={() => {
              setPhoto(project.img);
            }}
          >
            <img src={project.img} alt="project" className="myProjectPic" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
