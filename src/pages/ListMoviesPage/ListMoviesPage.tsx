import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ListDescription from './components/ListDescription/ListDescription';
import ListHeader from './components/ListHeader/ListHeader';
import ListMoviesMenu from './components/ListMovieMenu/ListMoviesMenu';
import ListMovies from './components/ListMovies/ListMovies';
import WatchedMovies from './components/WatchedMovies/WatchedMovies';
import './ListMovisPage.scss';

const ListMoviesPage: FC = () => {

    const { movies, loading } = useTypedSelector(state => state.listMovies)

    return (
        <section className="list-movies-page">
            <div className="list-movies-page__container container">
                <div className="list-movies-page__content">
                    <ListMoviesMenu />
                    <ListDescription />
                    <ListHeader />
                    <WatchedMovies />
                    <ListMovies movies={movies} />
                </div>
            </div>
        </section>
    );
};

export default ListMoviesPage;
