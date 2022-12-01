import React from 'react'
import './header.css'
import CTA from './CTA'
import sai1 from '../../assets/sai1.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='Header'>
      <div className="container header__container">
        <h2>Hi! I am</h2>
        <h1>SAI TEJA KAVURI</h1>
        <h3 className="text-light">
          And welcome to My Protfolio
        </h3>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img class='sai' src={sai1} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default header