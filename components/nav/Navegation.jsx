'use client'

import { React, useState } from 'react'
import Image from 'next/image';
import { HiOutlineMenu } from 'react-icons/hi';
import Styles from './Navegation.module.css'

function Navegation() {

  const [toogle, settoogle] = useState(false)

  return (
    <div id={Styles.nav}>
          <div>
            <HiOutlineMenu onClick={() => {settoogle(!toogle)}} id={toogle? Styles.toogley: Styles.toogle}/>
        </div>
        <div id={toogle? Styles.items: Styles.hideitems}>
            <ul>
                <li>
                    <a href="" className={Styles.a}>Home</a>
                </li>
                <li>
                    <a href="" className={Styles.a2}>Classes</a>
                </li>
                <li>
                    <a href="" className={Styles.a3}>Material</a>
                </li>
                <li>
                    <a href="" className={Styles.a4}>Works</a>
                </li>
            </ul>
        </div>
        <picture id={Styles.flower}>
            <Image src='/img/flower1.png' width='500' height='500' alt='flower' className={Styles.flower}/>
        </picture>
    </div>
  )
}

export default Navegation

