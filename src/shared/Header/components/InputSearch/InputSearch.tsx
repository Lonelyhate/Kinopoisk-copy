import React, { FC } from 'react'
import './InputSearch.scss'
import { BiSearch } from 'react-icons/bi'

const InputSearch:FC = () => {
  return (
    <div className='input-search'>
        <input type="text" className="input-search__input" placeholder='Фильмы, сериалы, персоны'/>
        <button className="input-search__btn">
            <BiSearch/>
        </button>
    </div>
  )
}

export default InputSearch