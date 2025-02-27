import React from 'react'
import { Outlet } from 'react-router'
import MainNavUser from '../components/MainNavUser'
import Footer from '../components/Footer'

function LayoutUser() {
  return (
    <div className="w-full">
    <MainNavUser />
    <Outlet />
    <Footer/>
   
  </div>
  )
}

export default LayoutUser