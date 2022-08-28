import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHtml5, FaBaby, FaSchool } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';


function Timeline() {
  return (
    <div className='Timeline'>
        <div className="container">
            <h2>Timeline</h2>
        <VerticalTimeline className='timeline-container'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    date="26 July 1999"
    iconStyle={{ background: '#FFCB9A', color: '#fff' }}
    icon={<FaBaby />}
  >
    <h3 className="vertical-timeline-element-title">Born</h3>
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2013-2017"
    iconStyle={{ background: '#D1E8E2', color: '#116466' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">"Mihai Eminescu" National College</h3>
    <h4 className="vertical-timeline-element-subtitle">Buzau, Romania</h4>
    <p>
      Studying Mathematics and Computer Science
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017-2021"
    iconStyle={{ background: '#FFCB9A', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Politehnica University</h3>
    <h4 className="vertical-timeline-element-subtitle">Bucharest, Romania</h4>
    <p>
        Studying Mathematics and Computer Science<br/>
        Courses:<br/>
         - Object Oriented Programming<br/>
         - Web Programming<br/>
         - Databases<br/>
         - Algorithms and Data Structure
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aug. 2021 - Feb. 2022"
    iconStyle={{ background: '#D1E8E2', color: '#116466' }}
    icon={<ImOffice />}
  >
    <h3 className="vertical-timeline-element-title">Survey Operator, Ipsos Interactive Services</h3>
    <h4 className="vertical-timeline-element-subtitle">Bucharest, Romania</h4>
    <p>
     - Creating the set up for the online surveys<br/>
     - Checking the quality of the surveys<br/>
     - More than 300 tasks done
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Feb. 2022 - present"
    iconStyle={{ background: '#FFCB9A', color: '#fff' }}
    icon={<ImOffice />}
  >
    <h3 className="vertical-timeline-element-title">Content Manager, Codezilla</h3>
    <h4 className="vertical-timeline-element-subtitle">Bucharest, Romania</h4>
    <p>
     - Managing the content of Dyson's products pages<br/>
     - Managing the content of MedLife's website
    </p>
  </VerticalTimelineElement>
  
  
</VerticalTimeline>
</div>
    </div>
  )
}

export default Timeline