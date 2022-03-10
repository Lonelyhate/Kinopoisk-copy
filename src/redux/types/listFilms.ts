import { IMovie } from "../../types/types";

export interface ListMoviesState {
    movies: IMovie[];
    loading: boolean;
    error: string | null;
    page: number;
    title: string;
    description: string
    img: null | string
    activeList: number
}

export enum ListMoviesActionTypes {
    FETCH_LIST_MOVIES = 'FETCH_LIST_MOVIES',
    FETCH_LIST_MOVIES_SUCCESS = 'FETCH_LIST_MOVIES_SUCCESS',
    FETCH_LIST_MOVIES_ERROR = 'FETCH_LIST_MOVIES_ERROR',
}

interface FetchListMoviesAction {
    type: ListMoviesActionTypes.FETCH_LIST_MOVIES;
}

interface FetchListMoviesSuccesAction {
    type: ListMoviesActionTypes.FETCH_LIST_MOVIES_SUCCESS;
    payload: {
        movies: IMovie[];
        page: number;
        title: string;
        description: string;
        img: string;
        activeList: number
    };
}

interface FetchListMoviesErrorAction {
    type: ListMoviesActionTypes.FETCH_LIST_MOVIES_ERROR;
    payload: string;
}

export type ListMoviesAction =
    | FetchListMoviesAction
    | FetchListMoviesSuccesAction
    | FetchListMoviesErrorAction;
