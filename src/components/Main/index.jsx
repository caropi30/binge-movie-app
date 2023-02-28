import React from "react";
import "./index.scss";
import { FilterContent } from "../Filter";
import { Section } from "../Sections";
import { CardContainer } from "../CardContainer";

const Main = () => {
  const [isTrending, setIsTrending] = "";
  
  return (
    <>
      <main className="main">
        <FilterContent />
        <Section classN="trending" title="Trending">
          <CardContainer classN="card-trending" />
        </Section>
        <Section classN="recomended" title="Recomended for you"></Section>
      </main>
    </>
  );
};

export { Main };
