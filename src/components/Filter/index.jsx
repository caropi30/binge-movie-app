import React from "react";
import { SearchIcon } from "../Icons";
import "./index.scss";

const FilterContent = () => {
  return (
    <>
      <label className="filter">
        <SearchIcon />
        <input className="filter-input" type="text" placeholder="Search for movies or TV series" />
      </label>
    </>
  );
};

export { FilterContent };
