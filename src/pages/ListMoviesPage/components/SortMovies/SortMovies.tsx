import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { setSortMovies } from '../../../../redux/actions/sortMovies';
import { SortItem, SortItemApi, SortType } from '../../../../types/types';
import './SortMovies.scss';
import { AiFillCaretDown } from 'react-icons/ai'
import cn from 'classnames'
import { BsCheck } from 'react-icons/bs'

const SortMovies: FC = () => {
    const sortItems: SortType[] = [
        {
            sortItemTitle: SortItem.SERIATIM,
            sortItemApi: SortItemApi.SERIATIM,
        },
        {
            sortItemTitle: SortItem.NUMBER_OF_RATING,
            sortItemApi: SortItemApi.NUMBER_OF_RATING,
        },
        {
            sortItemTitle: SortItem.RATING,
            sortItemApi: SortItemApi.RATING,
        },
        {
            sortItemTitle: SortItem.RELEASE_DATE,
            sortItemApi: SortItemApi.RELEASE_DATE,
        },
        {
            sortItemTitle: SortItem.TITLE,
            sortItemApi: SortItemApi.TITLE,
        },
    ];

    const dispatch = useDispatch();
    const { sortActive } = useTypedSelector((state) => state.sortMovies);
    const [isVisable, setIsVisable] = useState<boolean>(false);

    const onClickIsActiveSort = (sort: string) => {
        dispatch(setSortMovies(sort));
        setIsVisable(!isVisable)
    };

    const onClickVasableSortBlock = () => {
        setIsVisable(!isVisable);
    };

    return (
        <div className={cn('sort-movies', {
            active: isVisable
        })}>
            <button onClick={onClickVasableSortBlock} className="sort-movies__button">
                {sortActive}
                <AiFillCaretDown/>
            </button>
            {isVisable && (
                <ul className="sort-movies__list">
                    {sortItems.map((item) => (
                        <li className="sort-movies__item">
                            <button
                                onClick={() => onClickIsActiveSort(item.sortItemTitle)}
                                className="sort-movies__item-btn">
                                {sortActive === item.sortItemTitle && <BsCheck/>}
                                {item.sortItemTitle}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortMovies;
