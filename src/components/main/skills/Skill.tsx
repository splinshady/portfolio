import React from 'react';
import style from './Skills.module.scss';
import {ReactComponent as ReactLogo} from '../../../assets/icons/react-ico.svg';


type SkillsPropsType = {
    title: string
    description: string
}

const Skill: React.FC<SkillsPropsType> = ({title, description}) => {
    return (
        <article className={style.skill}>
            <div className={style.skill_container}>
                <div className={style.skill_title_container}>
                    <ReactLogo className={style.skill_icon}/>
                    <h4 className={style.skill_title}>{title}</h4>
                </div>
                <p className={style.skill_description}>{description}</p>
            </div>
        </article>
    );
};

export default Skill;