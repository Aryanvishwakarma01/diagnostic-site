import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider.jsx'
import Page2 from './components/Page2.jsx'
import Facilities from './components/Facilities.jsx'
import Footer from './components/Footer.jsx'
import About from './About/About.jsx'
import Facility from './Facility/Facilities.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Slider />
        <Page2 />
        <Facilities />
        <Footer /></>
    },
    {
      path: "/About",
      element:  <>
        <Navbar />
        <About />
        <Footer /></>
    },
    {
      path: "/Facility",
      element:  <>
        <Navbar />
        <Facility />
        <Facilities />
        <Footer /></>
    },
    {
      path: "/ContactUs",
      element:  <>
        <Navbar />
        <ContactUs />
        <Footer /></>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />
    <Slider />
    <Page2 />
    <Facilities />
    <Footer /> */}
    </>
  )
}

export default App