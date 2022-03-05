import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { fetchListMovies } from '../../redux/actions/listMovies';
import MoviesPageContent from './components/MoviesPageContent/MoviesPageContent';
import './MoviesPage.scss';

const MoviesPage: FC = () => {
    const dispatch = useDispatch()

    dispatch(fetchListMovies())
    return (
        <section className="movies-page">
            <div className="movies-page__container container">
                <h2 className="movies-page__title">Списки</h2>
                <MoviesPageContent/>
            </div>
        </section>
    );
};

export default MoviesPage;
