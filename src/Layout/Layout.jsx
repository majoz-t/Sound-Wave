import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  const location = useLocation();
  const hideFooterHome = location.pathname === "/";
  return (
    <>
    <nav><Navbar/></nav>
    <main><Outlet/></main>
    {!hideFooterHome && <Footer/>}    
    </>
  )
}

export default Layout