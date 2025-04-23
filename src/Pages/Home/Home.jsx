import React, { useEffect } from 'react'
import Hero from './Home Components/Hero'
import BikeCategory from './Home Components/BikeCategory'
import LatestMotorcycle from './Home Components/LatestMotorcycle'
import ServiceImg from './Home Components/ServiceImg'
import LatestBlogs from './Home Components/LatestBlogs'
import AboutUs from '../../Components/AboutUs'
import Count from '../../Components/Count'
import Testimonials from '../../Components/Testimonials'
import NatureImg from '../../Components/NatureImg'
import NewArrivals from './Home Components/New Arrivals/NewArrivals'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
        <div>
          <Hero />
          <BikeCategory />
          <AboutUs />
          <Count />
          <NatureImg />
          <LatestMotorcycle />
          <ServiceImg />
          <NewArrivals />
          <Testimonials />
          {/* <LatestBlogs /> */}
        </div>
    </>
  )
}

export default Home