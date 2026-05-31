import React from "react";
import { Link } from "react-scroll";

import "./Button.css";

const Button = ({ to = "", title = "Button", variant = "primary", icon = null }) => {
  return (
    <Link href="#" to={to} className={`btn btn-${variant}`} offset={-90}>
      {title}
      {icon}
    </Link>
  );
};

export default Button;
