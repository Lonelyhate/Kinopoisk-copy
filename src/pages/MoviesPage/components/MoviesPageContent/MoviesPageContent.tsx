import React, { FC } from 'react';
import { ListMoviesImg, ListMoviesNames, ListMoviesType } from '../../../../types/types';
import './MoviesPageContent.scss';

const MoviesPageContent: FC = () => {
    const listMovies: ListMoviesType[] = [
        {
            listMoviesName: ListMoviesNames.TOP_250_BEST_FILMS,
            listMoviesImg: ListMoviesImg.TOP_250_BEST_FILMS_IMG,
        },
        {
            listMoviesName: ListMoviesNames.TOP_100_POPULAR_FILMS,
            listMoviesImg: ListMoviesImg.TOP_100_POPULAR_FILMS_IMG,
        },
        {
            listMoviesName: ListMoviesNames.TOP_AWAIT_FILMS,
            listMoviesImg: ListMoviesImg.TOP_AWAIT_FILMS_IMG,
        },
    ];

    return (
        <ul className="movies-page-list">
            {listMovies.map((list) => (
                <li className="movies-page-list__item">
                    <img src={list.listMoviesImg} alt="" />
                    <h4 className="movies-page-list__title">{list.listMoviesName}</h4>
                </li>
            ))}
        </ul>
    );
};

export default MoviesPageContent;
