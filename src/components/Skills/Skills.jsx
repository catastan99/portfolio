import React from "react";
import Skill from "./Skill";
import styles from "./skills.module.scss";

const skills = [
  {
    id: 1,
    name: "ReactJS",
  },
  {
    id: 2,
    name: "Next.js",
  },
  {
    id: 3,
    name: "SASS",
  },
  {
    id: 4,
    name: "Git",
  },
  {
    id: 5,
    name: "MySQL",
  },
  {
    id: 6,
    name: "HTML5",
  },
];

function Skills() {
  return (
    <div className={styles.Skills}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.skills_wrapper}>
          {skills.map((skill) => {
            return <Skill key={skill.id} name={skill.name} icon={skill.icon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
