import React from "react";

import { NavigationBar } from "../Navigation";
import { FilterContent } from "../Filter";
import { Section } from "../Sections";
import { CardContainer } from "../CardContainer";

const Main = () => {
  return (
    <>
      <main className="main">
        <NavigationBar />
        <FilterContent />
        <Section title="Trending">
          <CardContainer />
        </Section>
      </main>
    </>
  );
};

export { Main };
