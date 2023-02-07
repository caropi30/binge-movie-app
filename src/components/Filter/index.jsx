import React from "react";
import { SearchIcon } from "../Icons";

const FilterContent = () => {
  return (
    <>
      <label>
        <SearchIcon fill="#FFF" />
        <input type="text" placeholder="Search for movies or TV series" />
      </label>
    </>
  );
};

export { FilterContent };
