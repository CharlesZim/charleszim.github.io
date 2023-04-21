import "./ProjectBox.css";

const ProjectBox = ({ project, index }) => {
  return (
    <div
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
          <div className="projectPic">
            <img src={project.img} alt="project" className="myProjectPic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
