import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
// import './header_socials.css'


const HeaderSocials = () => {
  return (
    <div class='header__socials'>
        <a href="https://www.linkedin.com/in/sai-teja-kavuri" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/saiz123" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/SaiX123" target='_blank' rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials