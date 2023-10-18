import React from 'react'
import { Navigation } from '../../molecules/Navigation'
import { StyledHeader } from './Header.style'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className='logo'>Logo</div>

      <Navigation />
    </StyledHeader>
  )
}

export { Header }
