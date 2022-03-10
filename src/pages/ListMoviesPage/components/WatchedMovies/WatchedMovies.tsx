import React, { FC } from 'react';
import './WatchedMovies.scss';

const WatchedMovies: FC = () => {
    return (
        <div className="watched-movies">
            <h3 className="watched-movies__title">Вы посмотрели 0 фильмов из 250:</h3>
            <div className="watched-movies__progress">
                <div className="watched-movies__active-progress">0%</div>
            </div>
        </div>
    );
};

export default WatchedMovies;
