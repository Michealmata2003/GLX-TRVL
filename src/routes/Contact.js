import React from 'react'
import Form from '../Components/Form' 
import Footer from '../Components/Footer'
import HeroImage from '../Components/HeroImage'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage headind='CONTACT.' text='Contact GLX Travel ' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact