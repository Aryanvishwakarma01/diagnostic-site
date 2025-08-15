import React from 'react'
import Slider from '../components/Slider'
import Page2 from '../components/Page2'
import Facilities from '../components/Facilities'
import OurFacilitiesHeading from '../components/OurFacilitiesHeading'
import Packages from '../components/Packages'
import WhyChooseUs from '../components/WhyChooseUs'
import LabGallery from '../components/LabGallery'

function Home() {
  return (
    <>
    <Slider />
    <Page2 />
    <WhyChooseUs />
    <Packages />
    <OurFacilitiesHeading />
    <Facilities />
    <LabGallery />
    </>
  )
}

export default Home