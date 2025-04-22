import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ScrollButton from '../Components/ScrollButton'
import TopHeader from '../Components/Header/TopHeader'

const Root = () => {
  return (
    <>
      <div>
        <TopHeader />
        <Header />
        <Outlet />
        <Footer />
        <ScrollButton />
      </div>
    </>
  )
}

export default Root