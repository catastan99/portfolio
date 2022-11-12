import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { Link } from "react-router-dom";
import CV from "../../assets/documents/cv-stancatalin-nov2022.pdf";
import styles from "./navbar.module.scss";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  const scrollHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={
        scrollY < 100
          ? styles.Navbar
          : [styles.Navbar, styles.scrolled].join(" ")
      }
    >
      <div className={[styles.container, "container"].join(" ")}>
        <Link to="/">
          <div className={styles.logo}>
            <p>CATALIN STAN</p>
          </div>
        </Link>
        <ul className={styles.icons}>
          <li className={styles.icon}>
            <a href="https://www.linkedin.com/in/catalinstan99/">
              <FaLinkedin />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="https://github.com/catastan99">
              <FaGithub />
            </a>
          </li>
          <li className={styles.icon}>
            <a href={CV} target="blank">
              <BiNews />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
