import React from "react";
import "./index.scss";
import { Card } from "../Card/index";
import { shows } from "../../seed-data/data";

//import { SimpleSlider } from "../Slider/index";

const CardContainer = ({shows}) => {
  return (
    <div className="grid">
      
    {shows.length ? 
    shows.map((show) => {
      return <Card show={show} key={show.id} />;
    }) :
    <span>Error</span>
    }
  </div>
  );
};

export { CardContainer };
