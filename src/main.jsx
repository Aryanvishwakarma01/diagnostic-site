import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import Page2 from './components/Page2.jsx'
import Facilities from './components/Facilities.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar />
    <Slider />
    <Page2 />
    <Facilities />
    <Footer />
  </StrictMode>,
)
