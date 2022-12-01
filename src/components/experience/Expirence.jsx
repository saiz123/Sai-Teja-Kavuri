import React from 'react'
import './expirence.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const expirence = () => {
  return (
    <section id='experience'>
      <div className='expirence-top'>
        <h5>What I can Do</h5>
      </div>
      
      <h2>My Skills</h2>
      <div className="container expirence_container">
        <div className="experience_frontend">
            <h3>Frontend Developement</h3>
            <div className="experience_content">
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                  <h4>HTML</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
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
                    <h4>BootStrap</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                    <div>
                      <h4>TailWind</h4>
                      <small className="text-light">Beginner</small>
                    </div>
              </article>
              <article className="experience_details">
                  <BsCheckCircleFill className="expirence_details-icon"/>
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Beginner</small>
                  </div>
              </article>
            </div>
        </div>
        <div className="experience_backend">
            <h3>Backend Developement</h3>
            <div className="experience_content">
            <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>node js</h4>
                  <small className="text-light">intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>mangoDB</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience_details">
                <BsCheckCircleFill className="expirence_details-icon"/>
                <div>
                  <h4>python</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default expirence