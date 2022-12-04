import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'

const footer = () => {
  return (
    <footer>
      <a href="#Header" className='footer_logo'>SaiX</a>
      <ul className='textlinks'>
        <li><a href="#Header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/SaiX123" target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href="https://github.com/saiz123" target='_blank' rel="noreferrer"><VscGithub/></a>
        <a href="https://www.instagram.com/saiteja_kavuri" target='_blank' rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/sai-teja-kavuri" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
      </div>
    </footer>
  )
}

export default footer