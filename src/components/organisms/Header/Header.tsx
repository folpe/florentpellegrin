import React from 'react'
import { Navigation } from '../../molecules/Navigation'
import { StyledHeader } from './Header.style'
import logo from '../../../assets/logoW.png'
import { animateScroll as scroll } from 'react-scroll'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div
        className='logo'
        onClick={() => {
          scroll.scrollToTop()
        }}
      >
        <img src={logo} alt='logo' />
        <span>
          Florent<span>PELLEGRIN</span>
        </span>
      </div>

      <Navigation />
    </StyledHeader>
  )
}

export { Header }
