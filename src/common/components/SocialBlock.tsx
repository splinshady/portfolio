import React from 'react';
import style from "./SocialBlock.module.scss";
import gitIco from "../../assets/icons/git.svg";
import telegramIco from "../../assets/icons/telegram.svg";
import mailIco from "../../assets/icons/mail.svg";

const SocialBlock = () => {
    return (
        <div className={style.social_block}>
            <object type="image/svg+xml" data={gitIco}>git</object>
            <object type="image/svg+xml" data={telegramIco}>telegram</object>
            <object type="image/svg+xml" data={mailIco}>gmail</object>
        </div>
    );
};

export default SocialBlock;