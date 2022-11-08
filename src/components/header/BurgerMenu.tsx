import React from 'react';
import style from './Header.module.scss';

type BurgerMenuPropsType = {
    menuActive: boolean
    callback: (menuActive: boolean) => void
}

const BurgerMenu: React.FC<BurgerMenuPropsType> = ({menuActive, callback}) => {
    return (
        <div className={`${style.menu_btn} ${menuActive && style.menu_btn_active}`}
             onClick={()=>{callback(!menuActive)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default BurgerMenu;