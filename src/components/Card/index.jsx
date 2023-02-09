import React from "react";
import "./index.scss";

const Card = ({ trending, mainContent }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img />
        </div>
        <div className="card-info">
          <div>
            <p>year</p>
            <p>movie</p>
            <p>rating</p>
          </div>
          <h3>Titulo</h3>
        </div>
      </div>
    </>
  );
};

export { Card };
