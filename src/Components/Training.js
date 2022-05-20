import React from 'react'
import './TrainingStyles.css'

import { Link } from 'react-router-dom'

import man from '../assets/img3.jpg'
import just from '../assets/img5.jpg'


const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>lThorough training is a necessity when travelling to space. We offer all inclusive training for pre-flight and in-flight scenerios </p>
            <Link to='/contact' ><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={man} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={just} className='img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training