import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import projects from "../../utils/projects.json";
import Project from "./Project";
import styles from "./projects.module.scss";

function Projects() {
  const [projectsName, setProjectsName] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  useEffect(() => {
    setProjectsName(Object.keys(projects));
  }, []);
  return (
    <div className={styles.Projects}>
      <div className="container">
        <h2>PROJECTS</h2>
        <div>
          <Slider {...settings}>
            {projectsName.map((projectName) => {
              return (
                <Project
                  key={projects[projectName].id}
                  {...projects[projectName]}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Projects;
