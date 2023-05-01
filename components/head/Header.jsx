import React from 'react'
import Image from 'next/image'
import Styles from './Header.module.css'


function Header() {

  return (
    <section id={Styles.header}>
        <div id={Styles.title} >
          <h1>Patricia Barranco</h1>
          <div>
            <hr />
            <h2>Teacher</h2>
          </div>
        </div>
        <picture id={Styles.picture}>
          <Image src='/img/myPhoto.png' height='400' width='400' alt='myPhoto'/>
        </picture>
    </section>
  )
}

export default Header