import React from 'react'
import './header.css'
import CTA from './CTA'
import sai1 from '../../assets/sai1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='Header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sai Teja Kavuri</h1>
        <h5 className="text-light">
          Security Engineer
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img className='sai' src={sai1} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header