import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

import { headerItems } from "../../assets/Data";

const Burger = (props) => {
  const [active, setActive] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !burgerRef.current.contains(event.target)
    ) {
      setActive(false);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
    if (windowSize[0] > 980 && active) {
      setActive(false);
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [windowSize, active]);

  return (
    <div>
      <div
        ref={burgerRef}
        onClick={() => setActive(!active)}
        className={"btn " + (active ? "active" : "not-active")}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        ref={menuRef}
        className="menuBurger"
        style={{
          height: active && menuRef ? 60 * (headerItems.length - 1) : 0,
        }}
      >
        {headerItems?.slice(0, -1).map((category, index) => {
          return (
            <Link
              href="#"
              onClick={() => setActive(false)}
              to={category.path}
              key={index}
              className="burgerItem"
              offset={-60}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Burger;
