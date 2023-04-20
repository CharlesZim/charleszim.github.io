import React from "react";
import { Link } from "react-scroll";

import "./Button.css";

const Button = (props) => {
  let to = props.to || "";
  let title = props.title || "Button";

  return (
    <Link href="#" to={to} className="ctaHome" offset={-60}>
      {title}
    </Link>
  );
};

export default Button;
