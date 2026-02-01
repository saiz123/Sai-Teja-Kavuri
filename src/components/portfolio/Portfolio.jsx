import React from 'react'
import './portfolio.css'

const workExperience = [
  {
    id: 1,
    title: 'Security Analyst',
    company: 'Community Dreams Foundation',
    date: 'July 2025 - Present',
    description: 'Working as a Security Analyst focusing on threat detection, vulnerability assessment, and implementing security protocols.'
  },
  {
    id: 2,
    title: 'Web Developer Intern',
    company: 'Exposis Data Labs',
    date: 'Previous',
    description: 'Assisted in developing and maintaining web applications, gaining hands-on experience in full-stack development.'
  }
]

const projects = [
  {
    id: 1,
    title: 'Security Acquisition Simulation',
    description: 'Developed a simulation environment to analyze security acquisition strategies and their impact on organizational risk posture.',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    title: 'SIEM Optimization',
    description: 'Enhanced SIEM tool configurations to improve log analysis efficiency and reduce false positives in incident detection.',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    title: 'Home Lab',
    description: 'Built a comprehensive home lab environment for practicing penetration testing, network analysis, and malware analysis.',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Work Experience Section */}
        <div className="portfolio__section">
            <h3>Work Experience</h3>
            <div className="portfolio__content">
                {
                    workExperience.map(({id, title, company, date, description}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <h3>{title}</h3>
                                <h4>{company}</h4>
                                <small className='text-light'>{date}</small>
                                <p style={{marginTop: '1rem'}}>{description}</p>
                            </article>
                        )
                    })
                }
            </div>
        </div>

        {/* Projects Section */}
        <div className="portfolio__section">
            <h3>Projects</h3>
            <div className="portfolio__content">
                {
                    projects.map(({id, title, description, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    {/* <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> */}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
