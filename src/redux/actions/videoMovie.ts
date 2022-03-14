import { Dispatch } from 'react';
import { videoMovieAction, videoMovieTypeAction } from '../types/videoMovie';

export const fetchVideoMovie = (id: number) => {
    return async (dispatch: Dispatch<videoMovieAction>) => {
        try {
            dispatch({ type: videoMovieTypeAction.FETCH_VIDEO_MOVIE });
            const response = await fetch(
                `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`,
                {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'ece13af4-1834-4a76-af8c-07eb1c62af6b',
                        'Content-Type': 'application/json',
                    },
                },
            ).then(resp => resp.json())
            dispatch({
                type: videoMovieTypeAction.FETCH_VIDEO_MOVIE_SUCCESS,
                payload: response.items
            })
        } catch (e) {
            dispatch({
                type: videoMovieTypeAction.FETCH_VIDEO_MOVIE_ERROR,
                payload: 'Ошибка загрузки трейлера'
            })
        }
    };
};
