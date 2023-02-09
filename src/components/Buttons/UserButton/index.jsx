import React from "react";
import "./index.scss";

const UserButton = ({ src, alt, href, classN }) => {
  return (
    <button type="button" className={classN}>
      <img src={src} alt={alt} />
      <a href={href}></a>
    </button>
  );
};

export { UserButton };
