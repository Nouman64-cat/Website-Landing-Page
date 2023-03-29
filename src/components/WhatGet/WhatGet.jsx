import React from 'react'
import './whatget.css';

import healthcare from '../../assets/healthcare.png'
import boardIcon from '../../assets/boardIcon.png'
import Group from '../../assets/Group.png'
import phoneCall from '../../assets/phoneCall.png'
import Badge from '../../assets/Badge.png'

const WhatGet = () => {
  return (
    <div className='WhatGet-container'>
      <h1>What You Get</h1>
      <div className='WhatGet-container__content'>
        <div className='WhatGet-container__content--item1'>
          <img src={healthcare} alt='healthcare' />
        </div>
        <div className='WhatGet-container__content--item2'>
          <img src={boardIcon} alt='boardIcon' />
        </div>
        <div className='WhatGet-container__content--item3'>
          <img src={Group} alt='Group' />
        </div>
        <div className='WhatGet-container__content--item4'>
          <img src={phoneCall} alt='phoneCall' />
        </div>
        <div className='WhatGet-container__content--item5'>
          <img src={Badge} alt='Badge' />
        </div>
      </div>
    </div>
  )
}

export default WhatGet
