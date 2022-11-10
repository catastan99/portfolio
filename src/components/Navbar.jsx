import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  const scrollHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className={scrollY < 100 ? "Navbar" : "Navbar scrolled"}>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <p>CATALIN STAN</p>
          </div>
        </Link>
        <ul className="icons">
          <li className="icon">
            <a href="https://www.linkedin.com/in/catalinstan99/">
              <FaLinkedin />
            </a>
          </li>
          <li className="icon">
            <a href="https://github.com/catastan99">
              <FaGithub />
            </a>
          </li>
          <li className="icon">
            <a href="">
              <BiNews />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
