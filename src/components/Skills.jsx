import React from 'react'
import Skill from './Skill';


const skills = [{
    id:1,
    name:"HTML5",
    icon:"Html5"
},
{
    id:2,
    name:"CSS3"
},
{
    id:3,
    name:"JavaScript"
},
{
    id:4,
    name:"ReactJS"
},
{
    id:5,
    name:"MySQL"
},
{
    id:6,
    name:"SASS"
}]

function Skills() {
  return (
    <div className="Skills">
        <div className="container">
            <div className="skills-wrapper">
            {
                skills.map((skill)=>{
                    return <Skill key={skill.id} name={skill.name} icon={skill.icon} />
                })
            }
            </div>
            
        </div>
    </div>
  )
}

export default Skills