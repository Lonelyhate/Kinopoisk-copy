import { Dispatch } from 'react';
import { ListMoviesAction, ListMoviesActionTypes } from '../types/listFilms';

export const fetchListMovies = () => {
    return async (dispatch: Dispatch<ListMoviesAction>) => {
        try {
            dispatch({ type: ListMoviesActionTypes.FETCH_LIST_MOVIES });
            const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/689', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'ece13af4-1834-4a76-af8c-07eb1c62af6b',
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json());
            dispatch({
                type: ListMoviesActionTypes.FETCH_LIST_MOVIES_SUCCESS,
                payload: {
                    movies: [],
                    page: 1,
                },
            });

            console.log(response)
        } catch (e) {
            dispatch({
                type: ListMoviesActionTypes.FETCH_LIST_MOVIES_ERROR,
                payload: 'Ошибка загрузки списка фильмов ',
            });
        }
    };
};
