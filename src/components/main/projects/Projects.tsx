import React from 'react';
import style from "./Progects.module.scss";
import Project from "./Project";

const Projects = () => {
    return (
        <section className={style.projects}>
            <div className={`container ${style.projects_container}`}>
                <h3 className={style.projects_title}>My projects</h3>
                <div className={style.projects_cards}>
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    );
};

export default Projects;