import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'

import video from '../assets/video.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>Galaxy Travel</h1>
        <p>World first civilian space travel.</p>

        <div>
          <Link to='/training' className='btn'>Training</Link>
          <Link to='/training' className='btn btn-lignt'>Launch</Link>
        </div>
      </div>
    </div>
  )
}

export default Video