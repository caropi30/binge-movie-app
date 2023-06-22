import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getShow } from '../services/data'

export const useSearchFilter = (category) => {
  const [filterDataInput, setFilterDataInput] = useState('')
  const [filterItems, setFilterItems] = useState([])

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [category || 'shows'],
    queryFn: () => getShow(category)
  })

  useEffect(() => {
    if (data) {
      setFilterItems(data.data.data)
    }
  }, [])

  useEffect(() => {
    if (data) {
      const filterShows = data.data.data.filter((show) =>
        show.title.toLowerCase().includes(filterDataInput)
      )
      console.log(filterShows)
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
