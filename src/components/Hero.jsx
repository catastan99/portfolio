import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { FcInfo } from 'react-icons/fc';

function Hero() {
  const [year, setYear] = useState(0)
  const [month, setMonth] = useState(0)
  const [day, setDay] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [hour, setHour] = useState(0)
  const [beats, setBeats] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(()=>{
    const date = new Date()
    setYear(date.getFullYear())
    setMonth(date.getMonth()+1)
    setDay(date.getDate())
    beatHandler()
  },[])


  useEffect(()=>{
    var days = 0
    let beats = 0
    if(month>7 & day <26 )  days = (year-1999)*365 + (month-7)*30 - (day - 26)
    else  days =  (year-1999)*365 + (month-7)*30 + (day - 26)

    beats = days*24*60*60 + hour*60*60 + minutes*60 + seconds
    setBeats(beats)
                           
  },[year,month,day,hour, minutes,seconds])



  const beatHandler = () =>{
    let time = new Date()
    setHour(time.getHours())
    setMinutes(time.getMinutes())
    setSeconds(time.getSeconds())
    setTimeout(   beatHandler    ,1000)
  }

  const infoIconHandler = () =>{
    setShowMessage((prev)=>!prev)
  }
  
  
  return (
    <div className='Hero' >
        <div className="container">
            <h1>Junior<br/>Frontend<br/><span>Developer</span></h1>
            {/* <div className="heart-container">
              <FaHeart className='heart-icon'/>
              <div className="heart-beats-info">
                <p>{beats}</p>
                <FcInfo title="Click the icon to show more" onClick={infoIconHandler}/>
                {showMessage && <p className='info-message'> heart beats since '99</p>}
              </div>
            </div> */}
            
        </div>
    </div>
  )
}

export default Hero