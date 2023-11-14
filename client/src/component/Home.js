import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Welcome to AISolutionCraft</h1>
        <h2>Empowering You Through Simplified Solutions</h2>
        <NavLink to='/login' className='home-btn'>Become a Member</NavLink>
      </div>
      <div className="img-container">
        <img src="./images/random.png" alt="" className='rotate'/>
        <img src="./images/glob.png" alt="" />
        <h1> We believe in making life easier. Whether you're in a rush, facing challenges, or simply seeking guidance, we've got you covered. Our innovative platform is designed to transform your needs into solutions effortlessly.</h1>
      </div>
    </>
  )
}

export default Home