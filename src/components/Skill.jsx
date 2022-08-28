import React from 'react'
import { FaHtml5, FaCss3,FaReact, FaSass } from 'react-icons/fa';
import {ReactComponent as Javascript  } from '../assets/icons/javascript.svg'
import {ReactComponent as Mysql  } from '../assets/icons/mysql.svg'

function Skill(props) {
    const {name} = props
  return (
    <div className="Skill">
        {name==="HTML5" && <FaHtml5 />}
        { name==="CSS3" && <FaCss3 />}
        { name==="ReactJS" && <FaReact />}
        { name==="JavaScript" && <Javascript />}
        { name==="MySQL" && <Mysql />}
        { name==="SASS" && <FaSass />}
         <p className="name">{name}</p>
    </div>
  )
}

export default Skill