import React from 'react';
import style from './Progects.module.css';

const Project = () => {
    return (
        <article className={style.project_container}>
            <img src="https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png" alt="project img"/>
            <h4>Project name</h4>
            <p>Project description project description project description project description project description project description project description</p>
        </article>
    );
};

export default Project;