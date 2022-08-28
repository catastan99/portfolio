import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="container">
            <div className="logo">
                <p>CATALIN STAN</p>
            </div>
            <ul className="icons">
              <li className="icon"><a href="https://www.linkedin.com/in/catalinstan99/"><FaLinkedin /></a></li>
              <li className="icon"><a href="https://github.com/catastan99"><FaGithub /></a></li>
              <li className="icon"><a href=""><BiNews /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar