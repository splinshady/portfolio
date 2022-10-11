import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`container ${style.header__container}`}>
                <nav className={style.navigation}>
                    <span>Главная</span>
                    <span>Скилы</span>
                    <span>Работы</span>
                    <span>Контакты</span>
                </nav>
            </div>
        </header>
    );
};

export default Header;