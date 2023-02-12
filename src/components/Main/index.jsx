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
        <Section title="Trending">
        </Section>
      </main>
    </>
  );
};

export { Main };
