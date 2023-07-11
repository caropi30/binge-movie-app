import React from 'react'
import { Main } from '../components/Main'
import { Section } from '../components/Sections'
import { FilterContent } from '../components/Filter'
import { CardContainer } from '../components/CardContainer'
import { useSearchFilter } from '../hooks/useSearchFilter'
import dataFavorites from '../seed-data/data-favorite'

const MoviesPage = () => {
  const {
    filterDataInput,
    setFilterDataInput,
    filterItems,
    isLoading,
    isError,
    data,
    error
  } = useSearchFilter('movie')

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const shows = data.data.data

  return (
    <Main shows={shows}>
      <FilterContent
        shows={shows}
        filterDataInput={filterDataInput}
        setFilterDataInput={setFilterDataInput}
      />
      <Section classN="recomended" title="Recomended for you">
        <CardContainer shows={filterItems} />
      </Section>
    </Main>
  )
}

export default MoviesPage
