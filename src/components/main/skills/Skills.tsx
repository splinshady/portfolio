import React from 'react';
import style from "./Skills.module.css";
import myPhoto from "../../../assets/me.jpg";
import Skill from "./Skill";

const Skills = () => {
    return (
        <section className={style.skills}>
            <div className={`container ${style.skills_container}`}>
                <h3 className={style.section_title}>My skills</h3>
                <div className={style.skills_cards}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </section>
    );
};

export default Skills;