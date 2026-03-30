import React from 'react'
import Navbar from './Navbar'
import Home from './HomePage'
import About from './About'
import Skill from './Skill'
import Project from './Project'

const MainPage = () => {
  return (
   <>
    <Navbar/>

      <section id="home">
        <Home/> 
      </section>

      <section id="about">
        <About/> 
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>
   </>
  )
}

export default MainPage