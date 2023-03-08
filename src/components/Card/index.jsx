import React from "react";
import classnames from "classnames";
import "./index.scss";
import {FilmMenuIcon, TvMenuIcon, Oval } from "../Icons/index"

const Card = ({ show }) => {
  const { id,thumbnail, isTrending, year, rating, category, title, classN } = show;

  const categoriesIcons = {
    "tv show": FilmMenuIcon("#fff"),  
    "movie": TvMenuIcon("#fff")
  }

  return (
    <>
      <div className={classnames("card")}>
        <div className="card-img">
          <img src={thumbnail} />
        </div>
        <div
          className={classnames("card-info", { "card-trending": isTrending })}
        >
          <div >
            <p>{year}</p>
            <Oval/>
            <p>{rating}</p>
            <Oval/>
            <p>{categoriesIcons[category]}{category}</p>
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export { Card };
