import React from 'react'
import './whatlook.css';
import CheckCircle from '../../assets/CheckCircle.png';
import image_card from '../../assets/image_card.png';
import mobile_screen from '../../assets/mobile_screen.png';
import dialog_box from '../../assets/dialog_box.png';
const List = ({ description }) => {
  return(
    <div className='WhatLook--container__content--list__item'>
      <img src={CheckCircle} alt='check-circle' />
      <p>{description}</p>
    </div>
  );
}

const WhatLook = () => {
  return (
    <div className='WhatLook--container'>
      <h1>What we look at!</h1>
      <div className='WhatLook--container__content'>
        <div className='WhatLook--container__content--card'>
          <img src={image_card} alt='card' />
        </div>
        <div className='WhatLook--container__content--list'>
          <List description={"Review and feedback on chart of accounts"}/>
          <List description={"Duplicate Contacts"}/>
          <List description={"Patterns in your regular suppliers"}/>
          <List description={"Contacts with your varying treatments"}/>
          <List description={"Contacts ended to multiple accounts"}/>
        </div>
      </div>
      <div className='WhatLook--container__mobile'>
          <img className='mb' src={mobile_screen} alt='mobile-screen' />
          <img className='db' src={dialog_box} alt='dialog-box' />
      </div>
    </div>
  )
}

export default WhatLook
