import React from 'react'
import { StyledMe } from './Me.style'

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
          <button>Contactez moi</button>
        </div>
      </div>
    </StyledMe>
  )
}

export { Me }
