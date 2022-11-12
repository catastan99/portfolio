import React from 'react'
import styles from './hero.module.scss'

function Hero() {
  return (
    <div className={styles.Hero} >
        <div className={[styles.container, 'container'].join(' ')}>
            <h1>Junior<br/>Frontend<br/><span>Developer</span></h1>
        </div>
    </div>
  )
}

export default Hero