import { React, useState } from 'react'

import { SearchIcon } from '../Icons'
import './index.scss'

const FilterContent = ({ filterDataInput, setFilterDataInput }) => {
  const handleChange = (e) => {
    e.preventDefault()
    setFilterDataInput(e.target.value)
    // console.log(e.target.value);
    // console.log(typeof filterData)
  }

  const handleItemFilter = () => {}
  return (
    <>
      <label className="filter">
        <SearchIcon />
        <input
          className="filter-input"
          type="text"
          placeholder="Search for movies or TV series"
          value={filterDataInput}
          onChange={handleChange}
        />
      </label>
    </>
  )
}

export { FilterContent }
