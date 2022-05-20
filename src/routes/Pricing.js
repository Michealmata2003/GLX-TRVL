import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PricingCards from '../Components/Pricing'
import HeroImage from '../Components/HeroImage'



const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage  heading='PRICING.' text='Choose your trip.'/>
        <PricingCards />
       <Footer /> 
    </div>
  )
}

export default Pricing