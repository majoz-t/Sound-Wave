import React from 'react'
import { Link } from "react-router";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div>
        <img src="./public/images/logo.png" alt="logo home" />
        <Link  to="/">Soundwave</Link>
      </div>
      <div>
        <Link to="/Discover">Discover</Link>
        <Link to="/Join">Join</Link>
      </div>
    </div>
  )
}

export default Navbar