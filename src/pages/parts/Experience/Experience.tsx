import React from 'react'
import { StyledExperience } from './Experience.style'
import { Element } from 'react-scroll'

const Experience: React.FC = () => {
  return (
    <StyledExperience>
      <Element name='ScrollToExperience'></Element>
      <div className='container'>
        <h3>Experience</h3>
        <div>Coming Soon</div>
      </div>
    </StyledExperience>
  )
}

export { Experience }
