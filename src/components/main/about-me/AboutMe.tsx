import React from 'react';
import style from './AboutMee.module.css';
import myPhoto from '../../../assets/me.jpg';


const AboutMe = () => {
    return (
        <section className={style.about_me}>
            <div className={`container ${style.about_me_container}`}>
                <div className={style.description_container}>
                    <p className={style.description}>Hi</p><br/>
                    <p className={style.description}>My name is</p> <h2 className={style.description}>Kirill Barkouski</h2><br/>
                    <p className={style.description}>I'm</p> <h1 className={style.description}>front-end developer</h1><br/>
                </div>
                <img className={style.photo} src={myPhoto} alt="it's me"/>
            </div>
        </section>
    );
};

export default AboutMe;