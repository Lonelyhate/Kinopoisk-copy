import { combineReducers } from "redux";
import { listMoviesReducer } from "./listMovies";
import { sortMoviesReducer } from "./sortMovies";


export const rootReducer = combineReducers({
    listMovies: listMoviesReducer,
    sortMovies: sortMoviesReducer
})

export type RootState = ReturnType<typeof rootReducer>