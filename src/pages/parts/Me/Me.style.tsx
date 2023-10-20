import styled from '@emotion/styled'
import profilePic from '../../../assets/profile-pic.png'

const StyledMe = styled.section`
  min-height: 748px;
  background-color: black;
  background: url(${profilePic}) 10% 50px no-repeat, black;
  background-size: 40% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 35%;

    flex: 0;

    & .text-wrapper {
      display: flex;
      flex-direction: column;

      & .my-name {
        letter-spacing: 0.2rem;
      }
      & h2 {
        font-size: 6rem;
        line-height: 6rem;
        margin: 0.5rem 0;
      }
      & .baseline {
        font-size: 1.3rem;
      }
    }

    & .action-wrapper {
      width: 100%;
      margin-top: 64px;
      display: flex;
      justify-content: flex-start;

      & button {
        color: #fff;
        border-color: #fff;
        &:hover {
          color: #ff971d;
          border-color: #ff971d;
        }
      }
    }
  }
`

export { StyledMe }
