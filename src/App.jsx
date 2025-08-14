import React from 'react'
import FacilitiesPage from './pages/FacilitiesPage.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AppointmentPage from './pages/AppointmentPage.jsx'
import PackagesPage from './pages/PackagesPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsOfServicePage from './pages/TermsOfServicePage.jsx'

const App = () => {
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/facilities' element={<FacilitiesPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
        <Route path='/book-appointment' element={<AppointmentPage />} />
        <Route path='/packages' element={<PackagesPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/termsofservice' element={<TermsOfServicePage />} />
      </Route>


    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App