import React from 'react';
import style from "./Invite.module.css";

const Invite = () => {
    return (
        <section className={style.invite}>
            <div className={`container ${style.invite_container}`}>
                <h3 className={style.invite_title}>Considering remote work options</h3>
                <button className={style.invite_btn}>hire me</button>
            </div>
        </section>
    );
};

export default Invite;