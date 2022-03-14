import { videoMovieAction, videoMovieState, videoMovieTypeAction } from "../types/videoMovie";

const initialState:videoMovieState = {
    videoInfo: [],
    loading: false,
    error: null
}

export const videoMovieReducer = (state = initialState, action: videoMovieAction): videoMovieState => {
    switch (action.type) {
        case videoMovieTypeAction.FETCH_VIDEO_MOVIE:
            return {
                ...state,
                videoInfo: [],
                error: null,
                loading: true
            }
        case videoMovieTypeAction.FETCH_VIDEO_MOVIE_SUCCESS:
            return {
                ...state,
                videoInfo: action.payload,
                loading: false
            }
        case videoMovieTypeAction.FETCH_VIDEO_MOVIE_ERROR:
            return {
                ...state,
                videoInfo: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}