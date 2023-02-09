import React from "react";

const Section = ({ title, classN, content }) => {
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
