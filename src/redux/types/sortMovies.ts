export interface SortMoviesState {
    sortActive: string
}

export enum SortMoviesActionType {
    SET_SORT = 'SET_SORT'
}

interface SetSort {
    type: SortMoviesActionType.SET_SORT
    payload: string
}

export type SortMoviesAction = SetSort