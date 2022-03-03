import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../../assets/img/logo.svg';
import InputSearch from './components/InputSearch/InputSearch';
import Menu from './components/Menu/Menu';
import './Header.scss';

const Header: FC = () => {

    return (
        <header className="header">
            <div className="header__container container">
                <Link to="/">
                    <img src={logoUrl} alt="Кинопоиск" />
                </Link>
                <InputSearch/>
                <Menu/>
            </div>
        </header>
    );
};

export default Header;
