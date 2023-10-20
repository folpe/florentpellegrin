import React from 'react'
import { StyledFooter } from './Footer.style'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <StyledFooter>
      <div className='container'>
        © Copyright {year} - Made with ❤️ by Florent PELLEGRIN
      </div>
    </StyledFooter>
  )
}

export { Footer }
