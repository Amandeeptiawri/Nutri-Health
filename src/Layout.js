import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavbar from './Navbar';
import Footer from './Footer'

function Layout() {
  return (
    <>
      <CustomNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout