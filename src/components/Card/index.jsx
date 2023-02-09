import React from "react";
import "./index.scss";

const Card = ({ year, category, rating, title, src }) => {
  //let cx = classNames.bind(styles);

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={src} />
        </div>
        <div className="card-info">
          <div>
            <p>{year}</p>
            <p>{rating}</p>
            <p>{category}</p>
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export { Card };
