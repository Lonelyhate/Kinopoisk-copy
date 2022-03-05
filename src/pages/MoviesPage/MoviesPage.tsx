import React, { FC } from 'react';
import { MoviesPageContent } from './components/MoviesPageContent/MoviesPageContent';
import './MoviesPage.scss';

const MoviesPage: FC = () => {
    return (
        <section className="movies-page">
            <div className="movies-page__container container">
                <h2 className="movies-page__title">Списки</h2>
                <MoviesPageContent />
            </div>
        </section>
    );
};

export default MoviesPage;
