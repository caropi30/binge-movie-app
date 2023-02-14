import React from "react";
import "./index.scss";
import { FilterContent } from "../Filter";
import { Section } from "../Sections";
import { CardContainer } from "../CardContainer";

const Main = () => {
  return (
    <>
      <main className="main">
        <FilterContent />
        <Section classN="trending" title="Trending"></Section>
        <Section classN="recomended" title="Recomended for you"></Section>
      </main>
    </>
  );
};

export { Main };
