import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`container ${style.footer_container}`}>
                <h2 className={style.footer_title}>Kirill Barkouski</h2>
                <div className={style.img_container}>
                    <img className={style.footer_img}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                        alt="react"/>
                    <img className={style.footer_img}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                        alt="react"/>
                    <img className={style.footer_img}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                        alt="react"/>
                    <img className={style.footer_img}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                        alt="react"/>
                </div>
                <span>copyright</span>
            </div>
        </footer>
    );
};

export default Footer;