import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
// import {BsFacebook} from 'react-icons/bs'
// import './header_socials.css'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sai-teja-kavuri" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/saiz123" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials