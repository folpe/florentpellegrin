import React from 'react'
import { StyledMe } from './Me.style'
import { Link } from 'react-scroll'

const Me: React.FC = () => {
  return (
    <StyledMe>
      <div className='container'>
        <div className='text-wrapper'>
          <div className='my-name'>{"Je m'appelle "}</div>
          <h2>Florent PELLEGRIN</h2>
          <div className='baseline'>
            🔥 Frontend developer #React specialist #UX lover
          </div>
        </div>
        <div className='action-wrapper'>
          <Link smooth={true} offset={-40} duration={1500} to='ScrollToContact'>
            <button>Contactez moi</button>
          </Link>
        </div>
      </div>
    </StyledMe>
  )
}

export { Me }
