import React from 'react'
import { StyledNav } from './Navigation.style'
import { Link } from 'react-scroll'

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <div className='nav-item'>
        <Link smooth={true} offset={-40} duration={1000} to='ScrollToAbout'>
          About
        </Link>
      </div>
      <div className='nav-item'>
        <Link
          smooth={true}
          offset={-40}
          duration={1500}
          to='ScrollToExperience'
        >
          Experience
        </Link>
      </div>
      <div className='nav-item'>
        <Link smooth={true} offset={-40} duration={1500} to='ScrollToWork'>
          Work
        </Link>
      </div>
      <div className='nav-item'>
        <Link smooth={true} offset={-40} duration={1500} to='ScrollToClients'>
          Clients
        </Link>
      </div>
      <div className='nav-item'>
        <Link smooth={true} offset={-40} duration={1500} to='ScrollToContact'>
          Contact
        </Link>
      </div>
    </StyledNav>
  )
}

export { Navigation }
