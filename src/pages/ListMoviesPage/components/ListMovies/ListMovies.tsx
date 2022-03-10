import React, { FC } from 'react';
import { IMovie } from '../../../../types/types';
import MovieItem from '../MovieItem/MovieItem';

interface ListMoviesProps {
    movies: IMovie[];
}

const ListMovies: FC<ListMoviesProps> = ({ movies }) => {

    return (
        <div className="list-movies">
            <ul className="list-movies__list">
                {movies.map((movie) => (
                    <li key={movie.filmId} className="list-movies__item">
                        <MovieItem movie={movie} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListMovies;
