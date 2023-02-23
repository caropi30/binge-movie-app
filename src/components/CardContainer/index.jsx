import React from "react";
import "./index.scss";
import { Card } from "../Card/index";
import { shows } from "../../seed-data/data";
import { useQuery } from "@tanstack/react-query";
import { getShow } from "../../services/show.js";
import Slider from "react-slick";

const CardContainer = () => {
  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ["shows"],
  //   queryFn: getShow,
  // });

  const settings = {
    dots: true,
    infinite: false,
    //autoplay: true,
    //speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export { CardContainer };
