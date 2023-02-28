import React from "react";
import "./index.scss";
import { Card } from "../Card/index";
import { shows } from "../../seed-data/data";
import { useQuery } from "@tanstack/react-query";
import { getShow } from "../../services/show.js";
import { SimpleSlider } from "../Slider/index";

const CardContainer = (isTrending) => {
  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ["shows"],
  //   queryFn: getShow,
  // });

  return (
    <div>
      {isTrending ? (
        <SimpleSlider>
          {shows.map((show) => {
            return <Card show={show} />;
          })}
        </SimpleSlider>
      ) : (
        <div>
          {shows.map((show) => {
            return <Card show={show} />;
          })}
        </div>
      )}
    </div>
  );
};

export { CardContainer };
