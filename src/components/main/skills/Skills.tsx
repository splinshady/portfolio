import React from 'react';
import style from "./Skills.module.scss";
import Skill from "./Skill";

const reactDescription = 'JSX, component lifecycle, REST API, functional/class components, hooks, DOM manipulation and event handlers, data structure'

const Skills = () => {
    return (
        <section className={style.skills}>
            <div className={`container ${style.skills_container}`}>
                <h3 className={style.section_title}>My skills</h3>
                <div className={style.skills_cards}>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                    <Skill title={'React'} description={reactDescription}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;