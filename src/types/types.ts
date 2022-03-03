export enum MenuNames {
    MOVIES = 'Фильмы',
    MOVIE_PREMIERES = 'Кинопремьеры',
    SEARCH = 'Расширенный поиск',
    BOOKMARKERS = 'Закладки'
}

export enum MenuLinks {
    MOVIES = '/films',
    MOVIE_PREMIERES = '/premieres',
    SEARCH = '/search',
    BOOKMARKERS = '/bookmarkes',
}

export type MenuType = {
    MenuName: MenuNames.MOVIES | MenuNames.MOVIE_PREMIERES | MenuNames.SEARCH | MenuNames.BOOKMARKERS
    MenuLink: MenuLinks.MOVIES | MenuLinks.MOVIE_PREMIERES | MenuLinks.SEARCH | MenuLinks.BOOKMARKERS
}