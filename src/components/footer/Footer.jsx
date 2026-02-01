import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Sai Teja Kavuri</a>

      <ul className='textlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/saiz123" target='_blank' rel="noreferrer"><VscGithub/></a>
        <a href="https://www.linkedin.com/in/sai-teja-kavuri" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sai Teja Kavuri. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
