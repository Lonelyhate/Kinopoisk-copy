import { combineReducers } from "redux";
import { listMoviesReducer } from "./listMovies";


export const rootReducer = combineReducers({
    listMovies: listMoviesReducer
})

export type RootState = ReturnType<typeof rootReducer>