import React from 'react'
import Navbar from './Navbar'
import Home from './HomePage'

const MainPage = () => {
  return (
   <>
    <Navbar/>

      <section id="home">
        <Home/> 
      </section>
   </>
  )
}

export default MainPage