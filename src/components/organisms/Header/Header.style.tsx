import styled from '@emotion/styled'

const StyledHeader = styled('header')`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6rem;
  height: 40px;
  background: rgba(22, 22, 23, 0.8);
  z-index: 2;

  & .logo {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    & img {
      height: 100%;
    }
    & > span {
      margin-left: 16px;
      font-family: Roboto;
      & span {
        color: #666;
      }
    }
  }
`

export { StyledHeader }
