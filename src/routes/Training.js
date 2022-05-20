import React from 'react'
import Footer from '../Components/Footer'
import HeroImage from '../Components/HeroImage'
import Navbar from '../Components/Navbar'
import TrainingSection from '../Components/Training'



const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='TRAINING.' text='Pre-flight & In-Flight Training.'  />
        <TrainingSection /> 
        <Footer />
    </div>
  )
}

export default Training