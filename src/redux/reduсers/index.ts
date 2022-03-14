import { combineReducers } from "redux";
import { listMoviesReducer } from "./listMovies";
import { sortMoviesReducer } from "./sortMovies";
import { videoMovieReducer } from "./videoMovie";


export const rootReducer = combineReducers({
    listMovies: listMoviesReducer,
    sortMovies: sortMoviesReducer,
    videoMovie: videoMovieReducer
})

export type RootState = ReturnType<typeof rootReducer>