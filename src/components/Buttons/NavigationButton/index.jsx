import React from "react";
import "./index.module.scss";

const NavButton = ({ text, href, icon }) => {
  return (
    <button type="button" className="nav__button">
      {text}
      {icon}
      <a href={href}></a>
    </button>
  );
};

export { NavButton };
