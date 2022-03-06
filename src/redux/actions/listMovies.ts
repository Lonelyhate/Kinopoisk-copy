import { Dispatch } from 'react';
import { listMovies } from '../../pages/MoviesPage/components/MoviesPageContent/MoviesPageContent';
import { ListMoviesAction, ListMoviesActionTypes } from '../types/listFilms';

export const fetchListMovies = (index: number) => {
    return async (dispatch: Dispatch<ListMoviesAction>) => {
        try {
            dispatch({ type: ListMoviesActionTypes.FETCH_LIST_MOVIES });
            const response = await fetch(
                `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${
                    index === 0
                        ? 'TOP_250_BEST_FILMS'
                        : index === 1
                        ? 'TOP_100_POPULAR_FILMS'
                        : 'TOP_AWAIT_FILMS'
                }&page=1`,
                {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'ece13af4-1834-4a76-af8c-07eb1c62af6b',
                        'Content-Type': 'application/json',
                    },
                },
            ).then((resp) => resp.json());
            dispatch({
                type: ListMoviesActionTypes.FETCH_LIST_MOVIES_SUCCESS,
                payload: {
                    movies: response.films,
                    page: response.pagesCount,
                    activeList: index,
                    title:
                        index === 0
                            ? '250 лучших фильмов'
                            : index === 1
                            ? '100 Самых популярных фильмов'
                            : 'Ожидаемые фильмы',
                    description:
                        index === 0
                            ? 'Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.'
                            : index === 1
                            ? 'Рейтинг составлен на основе посещаемости страниц фильмов, а также запросов к поисковой системе сайта. Список обновляется один раз в сутки.'
                            : 'Рейтинг составлен на основе пользовательских голосов, любой зарегистрированный посетитель сайта может легко принять в нём участие.',
                    img: listMovies[index].listMoviesImg,
                },
            });
        } catch (e) {
            dispatch({
                type: ListMoviesActionTypes.FETCH_LIST_MOVIES_ERROR,
                payload: 'Ошибка загрузки списка фильмов ',
            });
        }
    };
};
