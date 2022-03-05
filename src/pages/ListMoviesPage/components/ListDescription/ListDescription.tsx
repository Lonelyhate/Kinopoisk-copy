import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import './ListDescription.scss';

const ListDescription: FC = () => {
    const { title, description, img } = useTypedSelector((state) => state.listMovies);

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
