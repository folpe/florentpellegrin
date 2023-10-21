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
  const initialInputValues = {
    name: '',
    email: '',
    message: '',
  }
  const [inputValues, setInputValues] = useState<FormPost>(initialInputValues)

  const isEmpty =
    inputValues.name === '' ||
    inputValues.email === '' ||
    inputValues.message === ''

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }
  console.log('not reset', inputValues)

  const resetInputValues = () => {
    console.log('reset', inputValues)
    setInputValues(initialInputValues)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...inputValues }),
    })
      .then(() => {
        console.log('Form successfully submitted')
      })
      .catch((error) => alert(error))

    resetInputValues()
  }

  return (
    <StyledContact>
      <Element name='ScrollToContact'></Element>
      <div className='container'>
        <div className='form-wrapper'>
          <h3>Contact</h3>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              aria-label='name'
              placeholder='Nom*'
              value={inputValues.name}
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
              <button type='submit' disabled={isEmpty}>
                Envoyer
              </button>
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
