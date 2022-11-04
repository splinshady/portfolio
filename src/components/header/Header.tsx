import React from 'react';
import style from './Header.module.scss';
import {Button} from "../../common/components/Button";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`container ${style.header__container}`}>
                <span className={style.logo}>KIRYL.</span>
                <nav className={style.navigation}>
                    <span>Главная</span>
                    <span>Скилы</span>
                    <span>Работы</span>
                    <span>Контакты</span>
                </nav>
                <Button title={'Contact me'} primary/>
            </div>
        </header>
    );
};

export default Header;