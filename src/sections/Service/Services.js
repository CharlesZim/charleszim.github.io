import { services } from "../../assets/Data";

import "./Services.css";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section className="services">
      <h1>Services</h1>
      <div className="servicesCont">
        {services.map((service, index) => (
          <ServiceBox key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
