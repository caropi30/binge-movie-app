import React, { useState, useEffect } from "react";
import { Main } from "../components/Main";
import { Section } from "../components/Sections";
import { FilterContent } from "../components/Filter";
import { CardContainer } from "../components/CardContainer";
import { useQuery } from "@tanstack/react-query";
import { getShow } from "../services/show";
import Account from "./account";

const HomePage = () => {
  const [filterDataInput, setFilterDataInput] = useState("");
  const [filterItems, setFilterItems] = useState([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["shows"],
    queryFn: getShow,
  });

  useEffect(() => {
    if (data) {
      setFilterItems(data.data.data);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const filterShows = data.data.data.filter((show) =>
        show.title.toLowerCase().includes(filterDataInput)
      );
      console.log(filterShows);
      setFilterItems(filterShows);
    }
  }, [filterDataInput]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const shows = data.data.data;

  return (
    <Main shows={shows}>
      <Account />
      <FilterContent
        shows={shows}
        filterDataInput={filterDataInput}
        setFilterDataInput={setFilterDataInput}
      />
      {/* <Section classN="trending" title="Trending">
                <CardContainer classN="card-trending" isTrending={isTrending} /> 
            </Section> */}
      <Section classN="recomended" title="Recomended for you">
        <CardContainer shows={filterItems} />
      </Section>
    </Main>
  );
};

export { HomePage };
