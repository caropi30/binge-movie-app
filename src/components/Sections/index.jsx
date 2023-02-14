import React from "react";
import "./index.scss";

const Section = ({ title, classN, content, children }) => {
  return (
    <>
      <section className={classN}>
        <h2>{title}</h2>
        <div className={classN}>{children}</div>
      </section>
    </>
  );
};

export { Section };
