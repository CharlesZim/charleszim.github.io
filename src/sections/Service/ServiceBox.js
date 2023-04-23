import { Link } from "react-scroll";
import "./ServiceBox.css";

const ServiceBox = ({ service }) => {
  return (
    <div className="boxSer">
      <div className="serviceBox">
        <div className="serviceTop">
          <div className="serviceIcon">{service.icon}</div>
          <div className="serviceTitle">{service.title}</div>
        </div>
        <div className="serviceDescription">{service.description}</div>
        <Link to="contact" className="hireMe">
          Let's Work Together
        </Link>
      </div>
    </div>
  );
};

export default ServiceBox;
