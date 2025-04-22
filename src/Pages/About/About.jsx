import React, { useEffect } from 'react'
import OurTeam from './About Components/OurTeam'
import AboutUs from '../../Components/AboutUs'
import Count from '../../Components/Count'
import Testimonials from '../../Components/Testimonials'
import NatureImg from '../../Components/NatureImg'
import PageHeader from '../../Components/PageHeader'

const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    
  return (
    <>
      <div>
        <div>
          <PageHeader pageName={"About Us"} />
          <AboutUs />
          <Count />
          <NatureImg />
          <OurTeam />
          <Testimonials />
        </div>
      </div>
    </>
  )
}

export default About