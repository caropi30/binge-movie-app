import React from "react";
import { Card } from "../Card/index";
import { shows } from "../../seed-data/data";

const CardContainer = () => {
  return (
    <div>
      {shows.map((show) => {
        return (
          <Card
            src={show.thumbnail}
            category={show.category}
            year={show.year}
            rating={show.rating}
            title={show.title}
          />
        );
      })}
    </div>
  );
};

export { CardContainer };
