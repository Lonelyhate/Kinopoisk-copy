//Меню
export enum MenuNames {
    MOVIES = 'Фильмы',
    MOVIE_PREMIERES = 'Кинопремьеры',
    SEARCH = 'Расширенный поиск',
    BOOKMARKERS = 'Закладки',
}

export enum MenuLinks {
    MOVIES = '/movies',
    MOVIE_PREMIERES = '/premieres',
    SEARCH = '/search',
    BOOKMARKERS = '/bookmarks',
}

export type MenuType = {
    MenuName:
        | MenuNames.MOVIES
        | MenuNames.MOVIE_PREMIERES
        | MenuNames.SEARCH
        | MenuNames.BOOKMARKERS;
    MenuLink:
        | MenuLinks.MOVIES
        | MenuLinks.MOVIE_PREMIERES
        | MenuLinks.SEARCH
        | MenuLinks.BOOKMARKERS;
};

//Списки фильмов
export enum ListMoviesNames {
    TOP_250_BEST_FILMS = '250 лучших фильмов',
    TOP_100_POPULAR_FILMS = 'Топ 100 популярных фильмов',
    TOP_AWAIT_FILMS = 'Самые ожидаемые фильмы',
}

export enum ListMoviesImg {
    TOP_250_BEST_FILMS_IMG = 'https://kinopoisk-ru.clstorage.net/CpV146223/1f20e8tS/mxl8W4MNtPXhzV2UfE4RHwQaba8israz39HTyw8A6N6uh1M0Vav-l6U3bXsIA6rOe0me4-DiFtijf01xzHraNks9fA9GXLXxYT0JNZjrAaoAuxhvUpABsb2StOndcpocbULXEETOezOw9j3erFYLWi-aCDKnlPLoFptNN5s8XNcqGp7p0V6GYjK-XNLsfyGtxSn6X_AQ8nMvQAabXLGqHg_SNoBDPovhAUYPbQ2HL4iMGFjGt-VhijSK7jUpnY20emkMeLAOF7KSHGwyPz8DLxZ6y_1Ss7NTPfPH-50iKU5NU9aiQQ35k-JV7K2vh-44jglZ9naFsvr1Oo2GuR7P53gK7mvQfmbAAz1us68u819nOfgdkaHDYQ4CFrg_wEs-nJLVUlK86vLxJSxuXXUfKI75i6RV9bLJVzuMFet-zcTYiz64oZ_EUZJNDeBfDFFsdJm77TLy0XEv0GRZfgAoHr3wNgHjfZmB4kXevi5FzinfWwkW9LVy-vYpfiSLHK70CljeOhMtBFNjzT7hHa8BbHTL-y8QQ4AS3gPEeHwQew6N0SczkO4J8-CFzm6NVo2rLfjKpAQHM0hEKR2X-c1-hLvKLIgz_-fhE0wvAKxOwT_EGSgNQ_BSc87w1Sne4VpNzYE2AAMfawOQNk5PTiWPSpyIiJQH9oO4lphcBfiN72VYOA3Ys4-HUxGcXaMNrJE9ddlKToKis1FO08Q7niMqjq_hBwGSHbgCU1Utjk20jvmfyOuH9sYR2Kbo7lQo7R7m6kidO7A_FaATXBwiLr9zj6Z7G4_hY6Lg7dIVmi0ymJwPE_RSMG4os0BUHe88VZ2KjhpqVfYnQHgHep9Um61u5yo7beuhX4cCALx98r19Ub8GO0oOUHFiE_4gJTpM8zk_3uE0sEDemfMRpa0NLRSf6p4Y2FaHBzH7hmseJAmujRaqKnyYgH7EgbPfX7OdPkG9VFmLflBzUGCdMwVKDRFZL-9xV_FDbNnRIKa_vS30H8htu2jXhvSTypQIHcQZXNyki2rf6jAvtNEhPU8gTt6TvNUKii0wgxLBDzKGu6yxGq2NwfSCoaw54CCV_e5_xF7rH1qZ1caHEIh0WH0mWV895MhZTGlQTfRDgp5O8G7PMGwlOQjM0fGz0A7xFUvcMPj9juMkM2F_-WARZwy-nmX-yf6baQUkttGYBSreNCqu35fp27yqYiyk8pE_PnOsjaFdNNh5blKhovA80CZJHGLbTt0SlgNS7Zji8mUdTS-G__k92PlktwYTiNdKjcUqXt2W2nh8e4K-BQIxvJyRn29SjVXo2C7ig6Ch7JG1ax1QmR9ugPYzQW3agfLl35-tRCypHKvZpnVkoEnFK081C78shPm472pzDGVQAD0OwD8PgYwmeQmvslDyMM9TNcgMsoj83JClM_F8O3ESp84dTvT9aD4byNekBKEL50uNpsr9rwYKGG9ZYD7GgcNPjDDc34G-BGir7MPjY-CfklaJDvJar21DNyOgDUkRYJXert-njUhvmzt2JTYxGVUKn6Z7jV2FWWpeyENcZGBxT9-zrI9zHdXr-j8DoWPgPWDna5ygSwyPIZThAA2LkSGV3_5sdk4ZLgrYR9dUEylGOMw2ex9uJQtZjslSLefzgU0NIj7-Ml01GHss4WECkL3it6uecniMrWI2sBId2YPzNcyMvdTtaC2pCwfXd1PaNwt9tmjejUUr2b3KYbxXA_Hv_gAdrsOfVWlL3mNiwvC84eZr7JF5bc-BlQIifFqyMsfuPu3GzKgc24n2loVwyrY6veYK7K7EGIktO9EvN0Ixrz_h_pzij1aKeXxDQQBhXPE2uIwg-Ly88obiAV46ImJlz3185S3IblrolIe1sKn2mo2Fqb08lNk6vPuDrxWDwl9dsaysIw_Wa6l-sHNAgq0gpjn8EpgOj5G14VEdmwPghA3sfwXdqfx4uaUn9DNp91qv5BucTbZ4qAzqADxVgdAOD8HtTIFvJCkqH2KzEKAuo5a77zMbLb_TJnNzfBoCAvUsTP4GH1kcKchVB8exSVSZLVf5Xq3keftcmtNOZIHjzh_w7Y1jPjcK2k1SM2IAPoH2elxiS059MUVjsB-b0YF3bHxPdvyZLisIVsU3YMtUyx2UOx785libDGhxL9Xhc-8uEr9_kG4mOTouY5Ng8T0g5zutIRgOLjDXwfJMCvDCNZ2en7XeOC9L2ubWlBOqJEovlijfjKV5yoz5g30UoYB9XkGNDnMPpOt7HKCis-EdQPZ6TDDInl3QpSBxTEsiMsRf3s8EffkuiRsUZSQxGYao3xZLX_13Ccu8mAA8xFHgP0-j7n9i3wdpKdygkVNw_7P3SU0ym1-dwXVQUR2JkAJF_x6fd8-oHlhbpBSE4vp1Wh4kmo-Mxim7LlijbtRTQ-5uMl2NQNwmmWlvofPgUTzgZhkNMHtvrtFVcBFOO5Fwd8x_Tubfi9-o2_aXx9Co9Rtc9EkMTrYoOt754pxV01H8jdBtfiKv1jqb_fLTsdHuwPV7rnNIrl9zRDJQT7iyULceHI-HvJuOCOuHJjUxuvTZDXfJ3V9F-IhcCrH_N3IDvJ6yzLzDTcSJeS9gQpIQ3fOGGVyCawycwpSz03_IMgEErQ4NBm3J_1tb1DX1c1rk-sz3mG6Pdqm5HxpBbiZRo7_ewK8toX-U6UoPQEJTI21TtovOQuitzqDWE9I-a0PAtX6sraSte09ZqYYVh0PZlklcxCkcjxfLe4xaQe62kjFdTkPNTtEcFLvbndADsODe4kdpPDBb_Y_w5NHg7WsCcMSdrE7kncvOC5nkJSYS65d6rOU4bMzHaCttGjCMFkOCH1yxv-zgbXarSfzCExHBf2BV2xzTGu-f4OTwUP5Yo9OkHi4vFi1qbOp7FvUHgvjUK27mKM5PVxmZDqogDvaRMV1sQIx-EN8W-UocQvMC0T_RxmmcMvjsPWIHAdKsGcEjV-xPXEY-Kh1a6FZXFNCYJgrc8',
    TOP_100_POPULAR_FILMS_IMG = 'https://media.istockphoto.com/vectors/top-100-best-podium-award-sign-golden-object-vector-id1184625619?k=20&m=1184625619&s=612x612&w=0&h=YT7HOMocd847xINPmpVvATU9QoJD5vmPkR-2Y4etOqM=',
    TOP_AWAIT_FILMS_IMG = 'https://kinopoisk-ru.clstorage.net/CpV146223/1f20e8tS/mxl8W4MNtPXhzV2UfE4RHwQaba8israz39HTyw8A6N6uh1P0paue9lTyOLtI5urefoybk9DyltimXyhh3IpP9jttWS9TfLCkMSiMhehbBKpEDxm-4nOBsF2ShTjcoyr8jTFHEEFaKxPA58wuzfePD-_oqDVRpaCJxqrsJPrNDDUaSQ7IYA7X0qIuv-Dvr6DfFsqLXNLRAUOfAFeKriLpzI9T1_HRXdvjElZ8HH5WXis9SyplpbXRGqSI_Yf4f63keRl9WvFvh0Nyjh3QD3zg_ZQZ2G1wc6ICvxLkS87jek_fEVYR81_okWC1b_--9F7qjUk7ZJV0scnUSU3kS-8upiobHrjiD_cyAB880o7s8Q3kaJtekLCwco0hFZqNQZgtr8CXEgNMWYIBph8_fQasG51Jy7bHV8HJ5-tM5di9TqQJu59oMX4WkJGOTLHdHNOv13s7HWAT42CdAMfobABYTo_h9fFQ_ZjxcrV_za11nMqcGGk0dfaBCdRKXhfp3SzHOWlMiLPMpFCTf8yC3F5w_9d7aV2iMVIx_vEUSE0CSB2f0dTgYo4LYQC3v9191o-JHurK98cGM0hm-F50Wq_9F0nY3noB7HazIQ9Nkz3vkT-Ey7uOgGLh45_h51kcoLk83JGE8VEd-gPwxwxdXBX8i_9burX3BcL4lirvNciuvYaoOyxbUWwG05MNneGeTnNvhnp77MOjswK9YcRIDuB7TB_z5MBQjPjQ8QRvPp0WbYpMWPrW5PTyavYan4eZft13K4lcy7JvtkFgD12gH21gjTSp2b0CwHITDMLFma9Tav4NUxYzAy6LQEAXbg78Z4yZP0koVzb0EztWuw32mc2dBypJLztiftbTwhy9wc_-oq8ECZnsg3Fg0__RN6kPMqtfroLk8-FeO_EARp--HnbNm19ZKuU1hTNK1Tocd-lfnuTbyT4qEV_3kEGv3uOO3uG_Blv7LfNxYuGMsiSJf3NJP76zdJCgXYmxInecrK52LRt9qolVtITA6OQof3QJT2y1aeh-iWPvpuARPTzzHQ0BbQfaqCygEZKjLSAlCo7S6Xw80cQz079JURN3r-79JB1aXthopLbEs2umyC8U6w9vVCmrTRrgj8Sgg56f8s0tEM7XKpuuQfDgAjwh5pl-omiebNLm42J_mpGTRl0frcW8-nw5qVRmJoKqtrldt_l8nrZais_qI72l8DKNPoJO71Jf5jt63-NzsBMcE8eqfGI6vd-BF1FSTAjwEaVfDl50X_tM-urEB7UyaKZrPeQIfG60W7lsKvJdN1HCLb0grNywrDZaSn6jw5IRTcOGOV5jCP-OMoUxYl-IsnKl38yM9p0oHNuZ5MV3UNtneVwm-F2PRUmarLnjrIUxkBw8sv180H83KduvIpNBQ9zgRLn9curubYCVYmLvmVOCRZ3dDhUt-d35KfW0pjDaJVs85GuczcbLaQw50L-3kkHfTjANnwB_BQvKDWHi8tIMsIXavHCqPD4xRvByvugh4jevzb2Efon9qKkGFScCSjfpffZrLb00SDp-CEGc1TCgbU5jju9QjabaSVyyIrDSDBJ3a17i-C2d0yRTsB7o42J2r8ztN69KrOk45STVYGgH-k-l-y0vB-hoTdhAjaSzM51MsR99IczmOrrdocBws3yS9Tue4CoeHfFn8eEM-LFwpA_fn-YN6d3qmzZk1UMo9It8FHs-7uSISM3rQ741A8Pt7kI9XnE9JFrL7VNCc3Mck_ZqXpLJH_yThFJTPJkyQWX9_S22H8gd2-m0lZSxC-QKTdQrXNzHCXude7IOpmOCLa6D3L1DHDRZKN_xYlCxjXPmuo3yeJ4t4PdBsx-7UtE1X9xuJzwpfalo1feFgcuHSu3kSP-NVVm6LupyXCZBQ95e4Yzvc9202ckP85Fi8W6CNyoMgkr-n9OUcrBP-PPwt74e_yTc2Rw7SoTGJcBIR0stxilNrCR7G7xaY9-1AUHMD7P8rpN_1CuLjJJDoqFMAbQajpFrfbzj1uEibZly8VXPP1-l3xvs2xv1NgXzymfo7kSar27EKRrvChMMxzBB_8-jza5SnYU4qHzAcyLT7BGWek8iOi3fITSCMq768yLWTX9vFK_4LOkZNTXHAxvl6Lx0WW0ulSs7j1rhrqaBIW_uki_8oG7VKZuco0KC0R0SN2sO03l-n3I1EJDsqWIDlQ-OjcRs2o3oeeeF1KBohJg9Rlt-7-VoGt7acFz0QGGcfOJ8ztGNtKtJ3ZGBswINMld6TzJorg8B1WJxb6kj0WX-TM2U3XlM6bsmd2cQSjc637bbHW-Uumrf6hHftZCR_D7znq2gnGQIy49RgYDinNCke3wzav3OwcSyAU_44WNVf-wNxK7LHdlqZscWsJnUyS136cy_5QtKr3jRfOeAk1_v0g8eUr5nKTvP4oDiUb0T9-osc2gd_vLUkiEPq1NiJ03fbBU_2z4YmuaVlfOrhklsNTkfPCd7Sy6IcD0VARNN_THtLqHcFNmYPXDTwgA9wdd5TtArLj8DdoNjTqrQQQeNDQ_UXrguSTrW5CQBSpRIrmS6n-02iJucCoNudmOyH70ij49jPfbLK9-iQVMj_PLkCiwi2g2dwMdT4s2aoMFWPr4dVt9pfDhpZrc3wQh0WI2lOs5e5rvKrUmTnudykb--Yv3s8l_Em0vsgmFT4s9CRDq-sBqOPJKlEULM2wOwl49tv_Z9qc6Ia5TlF7M49yo-NQl_LObaqG_a055n4lItXPJ-jpEvpxsZfRDxEgEM8fXLXEJoPWzT9SOA_ggD8Sf-jr8VPZl-CTmkhycSacUrDcUoblylCgs_O5PvBUKDnh7gjPwzHtZ5Ce9x4wKgLVB32e5ii3x-w-UjoU4bMFCEng09dM8p36vYRnX3M_nWaFwHK37-Jpp6jVgj_4eiUS1c0H3Poe5kGVvskWPisz0Qxkpc4mqefWFnwFDMSXEydG3_XAefOp_aaNU1VSCrtpp9s',
}

export type ListMoviesType = {
    listMoviesName:
        | ListMoviesNames.TOP_250_BEST_FILMS
        | ListMoviesNames.TOP_100_POPULAR_FILMS
        | ListMoviesNames.TOP_AWAIT_FILMS;
    listMoviesImg:
        | ListMoviesImg.TOP_250_BEST_FILMS_IMG
        | ListMoviesImg.TOP_100_POPULAR_FILMS_IMG
        | ListMoviesImg.TOP_AWAIT_FILMS_IMG;
};

//Сортировка фильмов
export enum SortItem {
    SERIATIM = 'По порядку',
    NUMBER_OF_RATING = 'По количеству оценок',
    RATING = 'По рейтингу',
    RELEASE_DATE = 'По дате выхода',
    TITLE = 'По названию',
}

export enum SortItemApi {
    SERIATIM = '',
    NUMBER_OF_RATING = 'votes',
    RATING = 'rating',
    RELEASE_DATE = 'date',
    TITLE = 'title',
}

export type SortType = {
    sortItemTitle:
        | SortItem.SERIATIM
        | SortItem.NUMBER_OF_RATING
        | SortItem.RATING
        | SortItem.RELEASE_DATE
        | SortItem.TITLE;
    sortItemApi:
        | SortItemApi.SERIATIM
        | SortItemApi.NUMBER_OF_RATING
        | SortItemApi.RATING
        | SortItemApi.RELEASE_DATE
        | SortItemApi.TITLE;
};

export type countries = {
    country: string;
};

export type genres = {
    genre: string
}

export interface IVideoMovie {
    url: string;
    name: string;
    site: string
}

export interface IMovie {
    filmId: number;
    countries: countries[];
    nameRu: string;
    nameEn: string;
    filmLength: string;
    genres: genres[];
    posterUrl: string;
    posterUrlPreview: string;
    rating: string;
    ratingVoteCount: number;
    year: number;
}
