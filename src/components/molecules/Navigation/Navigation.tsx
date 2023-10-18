import React from 'react'
import { StyledNav } from './Navigation.style'

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <div className='nav-item'>About</div>
      <div className='nav-item'>Experience</div>
      <div className='nav-item'>Work</div>
      <div className='nav-item'>Contact</div>
    </StyledNav>
  )
}

export { Navigation }
