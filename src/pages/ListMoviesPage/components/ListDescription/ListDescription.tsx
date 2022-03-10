import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { fetchListMovies } from '../../../../redux/actions/listMovies';
import './ListDescription.scss';

const ListDescription: FC = () => {
    const dispatch = useDispatch();
    const { title, description, img } = useTypedSelector((state) => state.listMovies);

    let listMoviesDescr = localStorage.getItem('listMoviesDescr');

    useEffect(() => {
        if (!title && listMoviesDescr !== null) {
            dispatch(fetchListMovies(+listMoviesDescr));
        } else if (!title && listMoviesDescr === null) {
            dispatch(fetchListMovies(0));
        }
    }, []);

    return (
        <div className="list-description">
            <div className="list-description__text">
                <h2 className="list-description__title">{title}</h2>
                <p className="list-description__descr">{description}</p>
            </div>
            <div className="list-description__img">{img && <img src={img} alt={title} />}</div>
        </div>
    );
};

export default ListDescription;
