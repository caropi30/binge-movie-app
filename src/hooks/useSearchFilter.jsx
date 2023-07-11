import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getShow } from '../services/data'
import dataFavorites from '../seed-data/data-favorite'

export const useSearchFilter = (category) => {
  const [filterDataInput, setFilterDataInput] = useState('')
  const [filterItems, setFilterItems] = useState([])
  const [processedData, isSetProcessedData] = useState([])

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [category || 'shows'],
    queryFn: () => getShow(category)
  })

  useEffect(() => {
    if (data) {
      const shows = data.data.data
      const favorites = dataFavorites
      const newShowsToFavorite = shows.map(show => {
        const findFavorite = favorites.find((favShow) => favShow.id === show.id)

        if (findFavorite !== undefined) {
          show.favorite = true
        } else {
          show.favorite = false
        }
        return show
      })

      setFilterItems(newShowsToFavorite)
      isSetProcessedData(newShowsToFavorite)
    }
  }, [])

  useEffect(() => {
    if (data) {
      const filterShows = processedData.filter((show) =>
        show.title.toLowerCase().includes(filterDataInput)
      )
      // console.log(filterShows)
      setFilterItems(filterShows)
    }
  }, [filterDataInput])

  return {
    filterDataInput,
    setFilterDataInput,
    filterItems,
    setFilterItems,
    isLoading,
    isError,
    data,
    error
  }
}
