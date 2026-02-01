import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <div className='expirence-top'>
        <h5>My Skills</h5>
      </div>
      
      <h2>Technical Expertise</h2>
      <div className="container expirence_container">
        <div className="experience_frontend">
            <h3>Security Domains & Tools</h3>
            <div className="experience_content">
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                  <h4>Threat Modeling</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                    <h4>Penetration Testing</h4>
                    <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                    <h4>Burp Suite</h4>
                    <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                    <h4>Metasploit</h4>
                    <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                    <div>
                      <h4>Wireshark</h4>
                      <small className="text-light">Experienced</small>
                    </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                    <h4>Splunk/Wazuh</h4>
                    <small className="text-light">Experienced</small>
                  </div>
              </article>
            </div>
        </div>
        <div className="experience_backend">
            <h3>Cloud & Engineering</h3>
            <div className="experience_content">
            <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>AWS & GCP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>C / C++</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
               <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>Linux / Kali</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
               <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>Networking</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience