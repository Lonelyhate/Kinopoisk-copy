import { Dispatch } from 'react';
import { SortMoviesAction, SortMoviesActionType } from '../types/sortMovies';

export const setSortMovies = (sort: string) => {
    return (dispatch: Dispatch<SortMoviesAction>) => {
        dispatch({
            type: SortMoviesActionType.SET_SORT,
            payload: sort,
        });
    };
};
