import React from 'react'
import Navbar from './Navbar'
import Home from './HomePage'
import About from './About'

const MainPage = () => {
  return (
   <>
    <Navbar/>

      <section id="home">
        <Home/> 
      </section>
      <section id="home">
        <About/> 
      </section>
   </>
  )
}

export default MainPage