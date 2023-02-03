import React from "react";
import "./index.module.scss";
import "../../../assets/tv-menu.svg";

const NavButton = ({ text, src }) => {
  return (
    <button type="button">
      {text}
      <img src={src} alt="" />
    </button>
  );
};

export { NavButton };
