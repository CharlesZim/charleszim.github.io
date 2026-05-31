import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { BsDownload } from "react-icons/bs";

import cv from "../../assets/files/CV_Charles_Zimmerlin.pdf";
import { headerItems } from "../../assets/Data";

const Burger = () => {
  const [active, setActive] = useState(false);

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.target = "_blank";
    link.click();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setActive(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 880) setActive(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = headerItems.filter((item) => item.path !== "resume");

  return (
    <div className="burgerWrap">
      <div
        ref={burgerRef}
        onClick={() => setActive(!active)}
        className={"btn " + (active ? "active" : "not-active")}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        ref={menuRef}
        className="menuBurger"
        style={{ height: active ? `${items.length * 58 + 86}px` : 0 }}
      >
        {items.map((item, index) => (
          <Link
            href="#"
            onClick={() => setActive(false)}
            to={item.path}
            key={index}
            className="burgerItem"
            offset={-90}
          >
            {item.name}
          </Link>
        ))}
        <button
          className="burgerCta"
          onClick={() => {
            handleDownload();
            setActive(false);
          }}
        >
          Resume <BsDownload />
        </button>
      </div>
    </div>
  );
};

export default Burger;
