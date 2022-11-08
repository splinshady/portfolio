import React from 'react';
import style from './AboutMee.module.scss';
import myPhoto from '../../../assets/me.jpg';
import gitIco from '../../../assets/icons/git.svg';
import telegramIco from '../../../assets/icons/telegram.svg';
import mailIco from '../../../assets/icons/mail.svg';
import SocialBlock from "../../../common/components/SocialBlock";

const AboutMe = () => {
    return (
        <section className={style.about_me}>
            <div className={`container ${style.about_me_container}`}>
                <div className={style.description_container}>
                    <p className={style.firs_line}>Hi, I’m</p> <h2 className={style.firs_line}>Kirill Barkouski</h2><br/>
                    <p className={style.second_line}>Open to work</p><br/>
                    <p className={style.second_line}>as a</p> <h1 className={style.second_line}> front-end developer</h1>
                    <div className={style.social_container}>
                        <SocialBlock/>
                    </div>
                </div>
                <div className={style.img_container}>
                    <img className={style.photo} src={myPhoto} alt="it's me"/>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;