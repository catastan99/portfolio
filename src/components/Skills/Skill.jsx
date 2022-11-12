import React from 'react'
import { FaHtml5, FaCss3,FaReact, FaSass,  } from 'react-icons/fa';
import {BiGitBranch} from 'react-icons/bi';
import {ReactComponent as Javascript  } from '../../assets/icons/javascript.svg'
import {ReactComponent as Mysql  } from '../../assets/icons/mysql.svg'
import styles from './skills.module.scss'


function Skill(props) {
    const {name} = props
  return (
    <div className={styles.Skill}>
        {name==="HTML5" && <FaHtml5 />}
        { name==="CSS3" && <FaCss3 />}
        { name==="ReactJS" && <FaReact />}
        { name==="JavaScript" && <Javascript />}
        { name==="MySQL" && <Mysql />}
        { name==="SASS" && <FaSass />}
        { name==="Git" && <BiGitBranch />}
         <p className={styles.name}>{name}</p>
    </div>
  )
}

export default Skill