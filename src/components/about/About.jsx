import React from 'react'
import './about.css'
import ME from '../../assets/saiteja2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <div className='about-top'>
      <h5>Get To Know</h5>
      </div>
      
      <h2>About ME</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img  src={ME} alt="my_picture" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>GFG Local Chapter</h5>
              <small>Worked as Design Head</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Multimedia Club</h5>
              <small>Worked as Multimedia Club Head</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Expirence</h5>
              <small>Worked At Exposys data labs as an intern</small>
            </article>
            <article className='about_card'>
              <AiOutlineHeart className='about_icon'/>
              <h5>Hobbies</h5>
              <small>digital art,traveling.</small>
            </article>
          </div>
          <p>Hi I am Sai Teja kavuri (also known as Saix123), I am a student currently a student at Saint Louis University,  And aspirig to be a Fullstack Web Developer.</p>
          <a href="#contact" className='btn btn-primary'>Want to talk</a>
        </div>
      </div>
    </section>
  )
}

export default about