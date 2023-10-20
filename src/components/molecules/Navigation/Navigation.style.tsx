import styled from '@emotion/styled'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  & .nav-item {
    transition: all 0.4s ease-in-out;

    & a {
      cursor: pointer;
      color: white;
      font-size: 1.2rem;
      font-weight: 200;
      font-variant: small-caps;
      padding-left: 16px;
      transition: all 0.4s ease-in-out;
      &:hover {
        /* color: #ff451d; */
        transform: translateY(-1px);
        color: #ff971d;
      }
    }
    &:hover {
      /* color: #ff451d; */
      transform: translateY(-1px);
      color: #ff971d;
    }
  }
`

export { StyledNav }
