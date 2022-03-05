import React, { FC } from 'react';
import ListDescription from './components/ListDescription/ListDescription';
import ListMoviesMenu from './components/ListMovieMenu/ListMoviesMenu';
import './ListMovisPage.scss';

const ListMoviesPage: FC = () => {
    return (
        <section className="list-movies-page">
            <div className="list-movies-page__container container">
                <ListMoviesMenu />
                <ListDescription/>
            </div>
        </section>
    );
};

export default ListMoviesPage;
