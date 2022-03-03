import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuLinks, MenuNames, MenuType } from '../../../../types/types';
import './Menu.scss'

const Menu: FC = () => {
    const menu: MenuType[] = [
        {
            MenuName: MenuNames.MOVIES,
            MenuLink: MenuLinks.MOVIES,
        },
        {
            MenuName: MenuNames.MOVIE_PREMIERES,
            MenuLink: MenuLinks.MOVIE_PREMIERES,
        },
        {
            MenuName: MenuNames.SEARCH,
            MenuLink: MenuLinks.SEARCH,
        },
        {
            MenuName: MenuNames.BOOKMARKERS,
            MenuLink: MenuLinks.BOOKMARKERS,
        },
    ];
    return (
        <nav className="header__menu menu">
            {menu.length > 0 && (
                <ul className="menu__list">
                    {menu.map((item) => (
                        <li key={item.MenuLink} className="menu__item">
                            <Link to={item.MenuLink}>{item.MenuName}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Menu;
