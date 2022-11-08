import React from 'react';
import style from './Progects.module.scss';
import projectsImg from '../../../assets/progects-img/gr.png';
import {Button} from "../../../common/components/Button";

const Project = () => {
    return (
        <article className={style.project_container}>
            <img src={projectsImg} alt="project img"/>
            <h4 className={style.project_name}>Project name</h4>
            <p className={style.project_description}>Project description project description project deescription project description project descripescription project description project descripescription project description project descripescription project description project descripscription project description project description project description project description</p>
            <Button title={'View project'} secondary/>
        </article>
    );
};

export default Project;