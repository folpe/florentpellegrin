import React from 'react'
import { StyledContact } from './Contact.style'
import { Element } from 'react-scroll'

const Contact: React.FC = () => {
  // const initialValues: MyFormValues = { email: '', password: '', message: '' }

  return (
    <StyledContact>
      <Element name='ScrollToContact'></Element>
      <div className='container'>
        <div className='form-wrapper'>
          <h3>Contact</h3>
          <form
            name='portfolio-dev'
            method='post'
            data-netlify='true'
            data-netlify-recaptcha='true'
            data-netlify-honeypot='bot-field'
          >
            <input
              type='text'
              name='name'
              aria-label='name'
              placeholder='Nom*'
            />
            <input
              id='email'
              aria-label='email'
              type='email'
              name='email'
              placeholder='Email*'
            />

            <textarea
              aria-label='message'
              id='message'
              rows={8}
              name='message'
              placeholder='Message*'
            />
            <div className='action-wrapper'>
              <button type='submit'>Envoyer</button>
            </div>
          </form>
        </div>
        <div className='social-wrapper'>
          <ul>
            <li>
              <a
                href='https://twitter.com/fl0pe_'
                target='_blank'
                rel='noopener noreferrer'
              >
                twitter / X{' '}
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/florentpellegrin/'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href='https://github.com/folpe'
                target='_blank'
                rel='noopener noreferrer'
              >
                github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledContact>
  )
}

export { Contact }
