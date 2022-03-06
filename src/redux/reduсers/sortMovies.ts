import { SortItem } from '../../types/types';
import { SortMoviesAction, SortMoviesActionType, SortMoviesState } from '../types/sortMovies';

const initialState: SortMoviesState = {
    sortActive: SortItem.SERIATIM,
};

export const sortMoviesReducer = (state = initialState, action: SortMoviesAction): SortMoviesState => {
    switch (action.type) {
        case SortMoviesActionType.SET_SORT:
            return {
                ...state,
                sortActive: action.payload,
            };
        default:
            return state;
    }
};
