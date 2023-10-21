import React from 'react'

import figaroLogo from '../../../assets/figaro_logoGS.svg'
import capgeminiLogo from '../../../assets/capgemini_logoGS.svg'
import bnpLogo from '../../../assets/BNP_logoGS.svg'
import mmbLogo from '../../../assets/mmb_logoGS.svg'
import sacdLogo from '../../../assets/sacd_logoGS.svg'
import orangebankLogo from '../../../assets/orangebank_logoGS.svg'
import { StyledClients } from './Clients.style'
import { Element } from 'react-scroll'

const clientsData = [
  {
    name: 'Figaro',
    src: figaroLogo,
    alt: 'figaro',
  },
  {
    name: 'Capgemini',
    src: capgeminiLogo,
    alt: 'capgemini',
  },
  {
    name: 'BNP',
    src: bnpLogo,
    alt: 'bnp',
  },
  {
    name: 'Orange Bank',
    src: orangebankLogo,
    alt: 'orange bank',
  },
  {
    name: 'SACD',
    src: sacdLogo,
    alt: 'sacd',
  },
  {
    name: 'My Money Bank',
    src: mmbLogo,
    alt: 'mmb',
  },
]

const Clients: React.FC = () => {
  return (
    <StyledClients>
      <Element name='ScrollToClients'></Element>
      <h3>{"Il m'ont fait confiance"}</h3>
      <div className='container'>
        {clientsData.map((client) => (
          <div className='item' key={client.name}>
            <img src={client.src} alt={client.alt} />
          </div>
        ))}
      </div>
    </StyledClients>
  )
}

export { Clients }
