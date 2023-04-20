import "./CircleIcon.css";

const CircleIcon = (props) => {
  let icon = props.icon || null;
  return <div className="circleCont">{icon}</div>;
};

export default CircleIcon;
