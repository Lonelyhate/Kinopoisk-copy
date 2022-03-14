import React, { FC } from 'react';
import { IMovie } from '../../../../types/types';
import './MovieItem.scss';
import { FaBookmark } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import { BsFillPlayFill } from 'react-icons/bs';

interface MovieItemProps {
    movie: IMovie;
    onClickVideo: (id: number) => void;
}

const MovieItem: FC<MovieItemProps> = ({ movie, onClickVideo }) => {
    let filmLength = (time: string) => {
        let timeArray = time.split(':');
        let timeFrist = timeArray[0];
        let timeTwo = timeArray[1];

        return +timeFrist * 60 + +timeTwo;
    };

    return (
        <article className="movie-item">
            <div onClick={() => onClickVideo(movie.filmId)} className="movie-item__img">
                <img src={movie.posterUrlPreview} alt={movie.nameRu} />
                <span className="movie-item__rating-green">{movie.rating}</span>
                <span className="movie-item__play">
                    <BsFillPlayFill />
                </span>
            </div>
            <div className="movie-item__info">
                <h3 className="movie-item__title">{movie.nameRu}</h3>
                <div className="movie-item__middle">
                    {movie.nameEn && movie.nameEn + ','} {movie.year},{' '}
                    {movie.filmLength && filmLength(movie.filmLength) + ' мин.'}
                </div>
                <div className="movie-item__bottom">
                    <p className="movie-item__row">
                        {movie.countries.length &&
                            movie.countries.map(
                                (country, index) =>
                                    country.country +
                                    `${movie.countries.length === index + 1 ? '' : ', '}`,
                            )}{' '}
                        •{' '}
                        {movie.genres.length &&
                            movie.genres.map(
                                (genre, index) =>
                                    genre.genre +
                                    `${movie.genres.length === index + 1 ? '' : ', '}`,
                            )}
                    </p>
                </div>
            </div>
            <div className="movie-item__rating">
                {movie.rating} <span>{movie.ratingVoteCount}</span>
            </div>
            <div className="movie-item__btns">
                <button className="movie-item__btn">
                    <FaBookmark /> Буду смотреть
                </button>
                <button className="movie-item__btn">
                    <IoMdEye /> Просмотрено
                </button>
            </div>
        </article>
    );
};

export default MovieItem;
