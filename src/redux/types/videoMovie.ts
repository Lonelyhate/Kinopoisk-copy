import { IVideoMovie } from '../../types/types';

export interface videoMovieState {
    videoInfo: IVideoMovie[];
    loading: boolean;
    error: string | null;
}

export enum videoMovieTypeAction {
    FETCH_VIDEO_MOVIE = 'FETCH_VIDEO_MOVIE',
    FETCH_VIDEO_MOVIE_SUCCESS = 'FETCH_VIDEO_MOVIE_SUCCESS',
    FETCH_VIDEO_MOVIE_ERROR = 'FETCH_VIDEO_MOVIE_ERROR',
}

interface fetchVideoMovieAction {
    type: videoMovieTypeAction.FETCH_VIDEO_MOVIE;
}

interface fetchVideoMovieSuccessAction {
    type: videoMovieTypeAction.FETCH_VIDEO_MOVIE_SUCCESS;
    payload: IVideoMovie[];
}

interface fetchVideoMovieErrorAction {
    type: videoMovieTypeAction.FETCH_VIDEO_MOVIE_ERROR;
    payload: string;
}

export type videoMovieAction =
    | fetchVideoMovieAction
    | fetchVideoMovieSuccessAction
    | fetchVideoMovieErrorAction;
