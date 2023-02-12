import React from "react";
import "./index.scss";
import { Card } from "../Card/index";
import { shows } from "../../seed-data/data";

const CardContainer = () => {
  return (
    <div>
      {shows.map((show) => {
        return (
          <Card
            show={show}
            // src={show.thumbnail}
            // category={show.category}
            // year={show.year}
            // rating={show.rating}
            // title={show.title}
          />
        );
      })}
    </div>
  );
};

export { CardContainer };
