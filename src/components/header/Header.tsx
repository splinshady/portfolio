import React, {useState} from 'react';
import style from './Header.module.scss';
import {Button} from "../../common/components/Button";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false)

    return (
        <header className={style.header}>
            <div className={`container ${style.header__container}`}>
                <span className={style.logo}>KIRYL.</span>
                <nav className={`${style.navigation} ${burgerActive && style.navigation_active}`}>
                    <span>Главная</span>
                    <span>Скилы</span>
                    <span>Работы</span>
                    <span>Контакты</span>
                </nav>
                <Button title={'Contact me'} primary/>
                <BurgerMenu menuActive={burgerActive} callback={setBurgerActive}/>
            </div>
        </header>
    );
};

export default Header;