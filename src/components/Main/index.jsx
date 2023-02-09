import React from "react";
import { NavigationBar } from "../Navigation";
import { FilterContent } from "../Filter";
import { Card } from "../Card/index.jsx";

const Main = () => {
  return (
    <>
      <NavigationBar />
      <FilterContent />
    </>
  );
};

export { Main };
