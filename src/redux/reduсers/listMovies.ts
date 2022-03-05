import { ListMoviesAction, ListMoviesActionTypes, ListMoviesState } from "../types/listFilms";

const initialState: ListMoviesState = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    title: '',
    description: '',
    img: null
}

export const listMoviesReducer = (state = initialState, action: ListMoviesAction): ListMoviesState => {
    switch (action.type) {
        case ListMoviesActionTypes.FETCH_LIST_MOVIES:
            return {
                ...state,
                movies: [],
                loading: true,
                error: null,
                page: 1
            }
        case ListMoviesActionTypes.FETCH_LIST_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload.movies,
                page: action.payload.page,
                title: action.payload.title,
                description: action.payload.description,
                img: action.payload.img,
                loading: false,
                error: null
            }
        case ListMoviesActionTypes.FETCH_LIST_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}