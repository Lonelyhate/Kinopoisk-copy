export interface ListMoviesState {
    movies: any[];
    loading: boolean;
    error: string | null;
    page: number;
    title: string;
    description: string
    img: null | string
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
        movies: any[];
        page: number;
        title: string;
        description: string;
        img: string
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
