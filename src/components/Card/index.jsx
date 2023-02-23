import React from "react";
import classnames from "classnames";
import "./index.scss";

const Card = ({ show }) => {
  const { thumbnail, isTrending, year, rating, category, title, classN } = show;
  return (
    <>
      <div className={classnames("card")}>
        <div className="card-img">
          <img src={thumbnail} />
        </div>
        <div
          className={classnames("card-info", { "card-trending": isTrending })}
        >
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
