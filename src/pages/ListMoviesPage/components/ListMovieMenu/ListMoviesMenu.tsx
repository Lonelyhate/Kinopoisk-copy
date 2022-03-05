import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListMoviesMenu.scss';
import { listMovies } from '../../../MoviesPage/components/MoviesPageContent/MoviesPageContent';
import { useDispatch } from 'react-redux';
import { fetchListMovies } from '../../../../redux/actions/listMovies';
import cn from 'classnames'

const ListMoviesMenu: FC = () => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState<number>(0);

    const onClickList = (index: number) => {
        dispatch(fetchListMovies(index));
        setIsActive(index)
    };

    return (
        <div className="list-movies-menu">
            <Link to="/movies">Все списки</Link>
            <ul className="list-movies-menu__list">
                {listMovies.map((item, index) => (
                    <li
                        key={item.listMoviesName}
                        onClick={() => onClickList(index)}
                        className={cn('list-movies-menu__item', {
                            active: index === isActive
                        })}>
                        {item.listMoviesName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListMoviesMenu;
