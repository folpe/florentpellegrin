import React from 'react'
import { StyledWork } from './Work.style'
import { Element } from 'react-scroll'

const Work: React.FC = () => {
  return (
    <StyledWork>
      <Element name='ScrollToWork'></Element>

      <h3>Work</h3>
      <div className='container'>
        <div className='item'>Coming Soon</div>
        <div className='item'>Coming Soon</div>
        <div className='item'>Coming Soon</div>
        <div className='item'>Coming Soon</div>
      </div>
    </StyledWork>
  )
}

export { Work }
