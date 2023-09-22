import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getShow } from '../services/data'
import { getFavoriteShows } from '../services/favorites'
import dataFavorites from '../seed-data/data-favorite'

export const useSearchFilter = (category) => {
  const [filterDataInput, setFilterDataInput] = useState('')
  const [filterItems, setFilterItems] = useState([])
  const [processedData, isSetProcessedData] = useState([])

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [category || 'shows'],
    queryFn: () => getShow(category)
  })

  const { data: dataFavoriteShows, error: errorFavoriteShows } = useQuery({
    queryKey: ['favShows'],
    queryFn: () => getFavoriteShows()
  })

  useEffect(() => {
    console.log('entre al use effect 1')
    if (data && dataFavoriteShows) {
      console.log('entre al if del use effect 1')
      const shows = data.data.data
      const favorites = dataFavoriteShows.data.data
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

    if (data && errorFavoriteShows) {
      console.log('entre al segundo if del use effect 1')
      setFilterItems(data.data.data)
      isSetProcessedData(data.data.data)
      console.log('data normal', data)
    }
  }, [data, dataFavoriteShows])

  useEffect(() => {
    console.log('entre al  use effect 2')
    if (data) {
      const filterShows = processedData.filter((show) =>
        show.title.toLowerCase().includes(filterDataInput)
      )
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
