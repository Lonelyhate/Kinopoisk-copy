import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { fetchVideoMovie } from '../../../../redux/actions/videoMovie';
import { IMovie } from '../../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import VideoModal from '../ViedeoModal/VideoModal';

interface ListMoviesProps {
    movies: IMovie[];
}

const ListMovies: FC<ListMoviesProps> = ({ movies }) => {
    const { videoInfo, loading } = useTypedSelector((state) => state.videoMovie);
    const dispatch = useDispatch();
    const [isVisableModal, setIsVisableModal] = useState<boolean>(false);
    const [modalMovieInfo, setModalMovieInfo] = useState<IMovie | null>(null)

    const onClickVideo = (id: number) => {
        dispatch(fetchVideoMovie(id));
        setIsVisableModal(true);
    };

    const closeModal = () => {
        setIsVisableModal(false);
    };

    return (
        <div className="list-movies">
            <ul className="list-movies__list">
                {movies.map((movie) => (
                    <li key={movie.filmId} onClick={() => {setModalMovieInfo(movie)}} className="list-movies__item">
                        <MovieItem onClickVideo={onClickVideo} movie={movie} />
                    </li>
                ))}
            </ul>
            <VideoModal
                loading={loading}
                video={videoInfo.length > 0 ? videoInfo[0] : null}
                closeModal={closeModal}
                visable={isVisableModal}
                movie={modalMovieInfo}
            />
        </div>
    );
};

export default ListMovies;
