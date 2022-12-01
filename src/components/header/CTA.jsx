import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div>
        <a href={Resume} download class='btn-primary btn'>Download Resume</a>
    </div>
  )
}

export default CTA