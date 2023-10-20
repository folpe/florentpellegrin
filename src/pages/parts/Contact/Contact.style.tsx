import styled from '@emotion/styled'

const StyledContact = styled.section`
  min-height: 600px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  & .container {
    width: 1200px;
    display: flex;

    & .form-wrapper {
      width: 60%;
      & form {
        display: flex;
        flex-direction: column;
        flex: 1;
        & input {
          padding: 16px 32px;
          margin-bottom: 32px;
        }
        & .action-wrapper {
          margin-top: 64px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }

    & .social-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      & ul {
        list-style-type: '+';
        & li {
          padding-left: 32px;
          & a {
            color: black;
            transition: all 0.4s ease-in-out;
            &:hover {
              color: #ff971d;
            }
          }
        }
      }
    }
  }
`

export { StyledContact }
