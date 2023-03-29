import React from 'react'
import './hero.css'
import frame1 from '../../assets/Frame_1.png';
const Hero = () => {
  return (
    <div className='Hero-container'>
      <div className='Hero-container__text'>
        <p className='xero-heading'><span className='xero'>Xero</span> Health Check</p>
        <h1>
          Account bookkeeping data is the cornerstone of great decision making.
        </h1>
        <p>
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <button type='button'>
          Get Started
        </button>
      </div>
      <div className='Hero-container__image'>
        <img src={frame1} alt='frame1'/>
      </div>
    </div>
  )
}

export default Hero
