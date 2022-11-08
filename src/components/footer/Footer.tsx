import React from 'react';
import style from './Footer.module.scss';
import SocialBlock from "../../common/components/SocialBlock";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`container ${style.footer_container}`}>
                <h2 className={style.footer_title}>Kirill Barkouski</h2>
                <SocialBlock />
                <span>copyright</span>
            </div>
        </footer>
    );
};

export default Footer;