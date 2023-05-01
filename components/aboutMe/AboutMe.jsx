'use client'

import { React, useEffect } from 'react'
import Image from 'next/image'
import Styles from './AboutMe.module.css'
import AOS from 'aos'
import 'aos/dist//aos.css'

function AboutMe() {
    
  useEffect(() => {AOS.init({duration: 1000})}, [])
  
  return (
    <section id={Styles.aboutme} data-aos='fade-right'>
        <div id={Styles.cardContainer}>
            <div className={Styles.card} data-aos='fade-right'>
                <h3></h3>
            </div>
            <div className={Styles.card} data-aos='fade-right' data-aos-delay='500'>
                <h3></h3>
            </div>
            <div className={Styles.card} data-aos='fade-right' data-aos-delay='1000'>
                <h3></h3>
            </div>
            <Image src='/img/flower2.png' width='400' height='400' alt='flower' className={Styles.flower} data-aos='fade-left' data-aos-delay='500'/>
        </div>
        <h2></h2>
    </section>
  )
}

export default AboutMe