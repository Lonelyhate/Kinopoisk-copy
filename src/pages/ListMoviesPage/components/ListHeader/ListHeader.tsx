import React, { FC } from 'react'
import SortMovies from '../SortMovies/SortMovies'
import './ListHeader.scss'

const ListHeader:FC = () => {
  return (
    <div className='list-header'>
        <h3 className="list-header__title">Все фильмы</h3>
        <SortMovies/>
    </div>
  )
}

export default ListHeader