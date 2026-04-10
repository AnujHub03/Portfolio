import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/HomePage'
import About from '../Components/About'
import Skill from '../Components/Skill'
import Project from '../Components/Project'
import Connect from '../Components/Connect'

const MainPage = () => {
  return (
   <>
    <Navbar/>
{/* this page contains every components into one page in order to maintain the page to scroll */}
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

      <section id="contact">
        <Connect />
      </section>
   </>
  )
}

export default MainPage