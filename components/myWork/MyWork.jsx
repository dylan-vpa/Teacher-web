'use client'

import { React, useEffect } from 'react'
import Image from 'next/image'
import Styles from './MyWork.module.css'
import AOS from 'aos'
import 'aos/dist//aos.css'

function MyWork() {

    useEffect(() => {AOS.init({duration: 1000})}, [])

  return (
    <section id={Styles.mywork} data-aos='fade-left'>
        <Image src='/img/flower3.png' width='500' height='500' alt='flower' className={Styles.flower} data-aos='fade-right' data-aos-delay='500'/>
        <div id={Styles.cardContainer}>
            <div className={Styles.card} data-aos='fade-left' data-aos-delay='1000'>
                <h3></h3>
            </div>
            <div className={Styles.card} data-aos='fade-left' data-aos-delay='500'>
                <h3></h3>
            </div>
            <div className={Styles.card} data-aos='fade-left'>
                <h3></h3>
            </div>
        </div>
        <h2></h2>
    </section>
  )
}
export default MyWork

