import React from "react";
import { MdLaunch } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import styles from './projects.module.scss'


function Project(props) {
  const { name, link, github, image } = props;
  return <div className={styles.Project}>
    <div className={styles.project_image}>
        <img src={image} alt={name} />
    </div>
        <h4>{name}</h4>
    <div className={styles.project_icons}>
        {github && <a href={github}target="blank" ><FaGithub /></a>}
        {link && <a href={link} target="blank"><MdLaunch /></a>}
    </div>
  </div>;
}

export default Project;
