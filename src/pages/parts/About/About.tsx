import React from 'react'
import { StyledAbout } from './About.style'
import { Element } from 'react-scroll'

const About: React.FC = () => {
  return (
    <StyledAbout>
      <Element name='ScrollToAbout'></Element>
      <div className='container'>
        <h3>About</h3>
        <p>
          {`Je suis Florent PELLEGRIN, développeur React passionné avec plus de 10 ans d'expérience.
          Mon parcours m'a conduit à maîtriser les subtilités du front-end, associée à des compétences solides en UX/UI.
          Véritable passionné de technologie, je m'efforce de faire coéxister le réel et le digital.`}
        </p>
        <p>
          {`Mon expertise couvre l'ensemble du spectre du développement web.
          J'ai acquis une connaissance approfondie des technologies front-end, tout en étant à l'aise en back-end,
          ce qui me permet de créer des applications web modernes, intuitives et performantes.`}
        </p>
        <p>
          {`En tant que freelance, je comprends l'importance de livrer un travail de haute qualité dans des délais raisonnables.
          Lors d'une collaboration, je privilégie la qualité, l'innovation et l'efficacité.
          Je suis prêt à apporter une grande valeur à chaque mission, à partager des idées et à apprendre avec l'équipe.`}
        </p>
        <p>{`Si vous cherchez un développeur React passionné par l'innovation et la qualité, je suis prêt à collaborer sur des projets stimulants.`}</p>
      </div>
    </StyledAbout>
  )
}

export { About }
