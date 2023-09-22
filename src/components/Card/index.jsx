import React, { useState } from 'react'
import classnames from 'classnames'
import './index.scss'
import { FilmMenuIcon, TvMenuIcon, Oval, MarkedItem } from '../Icons/index'
import { useMutation } from '@tanstack/react-query'
import { putShow } from '../../services/favorites'

const Card = ({ show }) => {
  const { id, thumbnail, isTrending, year, rating, category, title, classN } = show

  const categoriesIcons = {
    'tv show': FilmMenuIcon('#fff'),
    movie: TvMenuIcon('#fff')
  }

  const [markedItem, setMarkedItem] = useState(show.favorite)

  const mutation = useMutation({ mutationFn: putShow })

  const handleMarker = async () => {
    console.log('click handler')
    try {
      await mutation.mutateAsync(id)
      setMarkedItem(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div id={id} className={classnames('card')}>
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
