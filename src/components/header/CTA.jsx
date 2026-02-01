import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn btn-primary'>Download Resume</a>
    </div>
  )
}

export default CTA