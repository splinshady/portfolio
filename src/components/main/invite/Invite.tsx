import React from 'react';
import style from "./Invite.module.scss";
import {Button} from "../../../common/components/Button";

const Invite = () => {
    return (
        <section className={style.invite}>
            <div className={`container ${style.invite_container}`}>
                <h3 className={style.invite_title}>Remote / relocate</h3>
                <Button title={'Contact me'} className={style.contactBtn}/>
            </div>
        </section>
    );
};

export default Invite;