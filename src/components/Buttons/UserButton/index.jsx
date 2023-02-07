import React from "react";
import "./index.module.scss";

const UserButton = ({ src, alt, href }) => {
  return (
    <button type="button" className="usr__btn">
      <img src={src} alt={alt} />
      <a href={href}></a>
    </button>
  );
};

export { UserButton };
