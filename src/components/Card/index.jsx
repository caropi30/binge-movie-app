import React, { useState } from 'react'
import classnames from 'classnames'
import './index.scss'
import { FilmMenuIcon, TvMenuIcon, Oval, MarkedItem } from '../Icons/index'
import { useMutation } from '@tanstack/react-query'
import { putShow } from '../../services/data'

const Card = ({ show }) => {
  const { id, thumbnail, isTrending, year, rating, category, title, classN } = show

  const categoriesIcons = {
    'tv show': FilmMenuIcon('#fff'),
    movie: TvMenuIcon('#fff')
  }

  const [markedItem, setMarkedItem] = useState(false)

  const mutation = useMutation({ mutationFn: putShow })

  const handleMarker = () => {
    console.log('click handler')
    try {
      mutation.mutate(id)
      setMarkedItem(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={classnames('card')}>
        <button className="card-marked" onClick={handleMarker}>{MarkedItem(markedItem ? '#fff' : 'none')}</button>
        <div className="card-img">
          <img src={thumbnail} />
        </div>
        <div
          className={classnames('card-info', { 'card-trending': isTrending })}
        >
          <div >
            <p>{year}</p>
            <Oval/>
            <p>{rating}</p>
            <Oval/>
            <p>{categoriesIcons[category]}{category}</p>
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  )
}

export { Card }
