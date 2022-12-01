import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
// import {HiCodeBracketSquare} from 'react-icons/hi'
import {BsJournalBookmark} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#Header" onClick={()=> setActiveNav('#')}class={activeNav==='#' ? 'active':''}><FiHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} class={activeNav==='#about' ? 'active':''}><FiUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} class={activeNav==='#experience' ? 'active':''}><BsJournalBookmark/></a>
      {/* <a href="#protfolio" onClick={()=> setActiveNav('#protfolio')} class={activeNav==='#protfolio' ? 'active':''}><HiCodeBracketSquare/></a> */}
      <a href="#contact" onClick={()=> setActiveNav('#contact')} class={activeNav==='#contact' ? 'active':''}><BsTelephone/></a>
    </nav>
     
    )
}

export default Nav