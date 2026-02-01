import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {BsJournalBookmark} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#Header" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active':''}><FiHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><FiUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BsJournalBookmark/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BsTelephone/></a>
    </nav>
     
    )
}

export default Nav