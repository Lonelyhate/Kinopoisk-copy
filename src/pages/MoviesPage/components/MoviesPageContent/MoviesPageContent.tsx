import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchListMovies } from '../../../../redux/actions/listMovies';
import { ListMoviesImg, ListMoviesNames, ListMoviesType } from '../../../../types/types';
import './MoviesPageContent.scss';

export const listMovies: ListMoviesType[] = [
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

export const MoviesPageContent: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickList = (index: number) => {
        dispatch(fetchListMovies(index));
        navigate('/movies/list');
        localStorage.setItem('listMoviesDescr', index + '')
    };

    return (
        <ul className="movies-page-list">
            {listMovies.map((list, index) => (
                <li
                    key={list.listMoviesName}
                    onClick={() => onClickList(index)}
                    className="movies-page-list__item">
                    <img src={list.listMoviesImg} alt="" />
                    <h4 className="movies-page-list__title">{list.listMoviesName}</h4>
                </li>
            ))}
        </ul>
    );
};