import React, { useState } from 'react'
import { StyledContact } from './Contact.style'
import { Element } from 'react-scroll'

interface FormPost {
  name?: string
  email?: string
  message?: string
}

interface EncodeProps extends FormPost {
  [index: string]: string | undefined
  'form-name': string
}

const encode = (data: EncodeProps) => {
  return Object.keys(data)
    .map((key: keyof EncodeProps): string => {
      const computedValue: string | undefined = data[key]
      return (
        encodeURIComponent(key) + '=' + encodeURIComponent(computedValue ?? '')
      )
    })
    .join('&')
}

const Contact: React.FC = () => {
  const [inputValue, setInputValue] = useState<FormPost>()

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-fp', ...inputValue }),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error))
  }

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
            onSubmit={handleSubmit}
          >
            <input type='hidden' name='contact-fp' value='contact' />
            <input
              type='text'
              name='name'
              aria-label='name'
              placeholder='Nom*'
              onChange={handleChange}
            />
            <input
              id='email'
              aria-label='email'
              type='email'
              name='email'
              placeholder='Email*'
              onChange={handleChange}
            />

            <textarea
              aria-label='message'
              id='message'
              rows={8}
              name='message'
              placeholder='Message*'
              onChange={handleChange}
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
