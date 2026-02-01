import React from 'react'
import './about.css'
import ME from '../../assets/saiteja2.jpg'
import {FaAward, FaGraduationCap} from 'react-icons/fa'
import {BsPatchCheckFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <div className='about-top'>
      <h5>Get To Know</h5>
      </div>
      
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img  src={ME} alt="Sai Teja Kavuri" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Internship & Projects</small>
            </article>
            <article className='about_card'>
              <FaGraduationCap className='about_icon'/>
              <h5>Education</h5>
              <small>MS Information Systems<br/>B.Tech CSE</small>
            </article>
            <article className='about_card'>
              <BsPatchCheckFill className='about_icon'/>
              <h5>Certifications</h5>
              <small>Security+, Network+, PenTest+<br/>(Exp Feb 2026)</small>
            </article>
          </div>
          <p>
            Detail-oriented Security Engineer with a Master’s in Information Systems and a strong Computer Science foundation. Skilled in threat modeling, penetration testing, cloud security, and incident response. Built home labs simulating enterprise networks and tools. Communicates technical concepts to non-technical audiences and influences secure decisions. Actively pursuing top security certifications and eager to contribute to large-scale security initiatives.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About