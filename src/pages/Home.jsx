import React from 'react'
import Slider from '../components/Slider'
import Page2 from '../components/Page2'
import Facilities from '../components/Facilities'
import OurFacilitiesHeading from '../components/OurFacilitiesHeading'
import Packages from '../components/Packages'

function Home() {
  return (
    <>
    <Slider />
    <Page2 />
    <Packages />
    <OurFacilitiesHeading />
    <Facilities />
    </>
  )
}

export default Home