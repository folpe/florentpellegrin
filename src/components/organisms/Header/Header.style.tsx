import styled from '@emotion/styled'

const StyledHeader = styled('header')`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 8px 32px;

  background: rgba(22, 22, 23, 0.8);

  & .logo {
    color: red;
  }
`

export { StyledHeader }
