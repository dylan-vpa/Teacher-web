import React from 'react'
import Styles from './page.module.css'
import Header from '@/components/head/Header'
import AboutMe from '@/components/aboutMe/AboutMe'
import MyWork from '@/components/myWork/MyWork'
import Footer from '@/components/footer/Footer'

function HomePage() {

  return (
    <>
      <main>
          <Header />
          <section id={Styles.container}>
            <AboutMe />
            <MyWork />
            <Footer/>
          </section>
      </main>
    </>
  )
}

export default HomePage