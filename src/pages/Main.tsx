import React from 'react'
import { Header } from '../components/organisms/Header'
import { About } from './parts/About'
import { Work } from './parts/Work'
import { Contact } from './parts/Contact'
import { Me } from './parts/Me'
import { StyledMain } from './Main.style'
import { Experience } from './parts/Experience'

const Main: React.FC = () => {
  return (
    <StyledMain>
      <Header />
      <Me />
      <About />
      <Experience />
      <Work />
      <Contact />
      Coucou
    </StyledMain>
  )
}

export { Main }
