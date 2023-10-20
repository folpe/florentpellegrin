import styled from '@emotion/styled'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  & h3 {
    font-family: Roboto;
    font-size: 3rem;
    line-height: 2rem;
    font-weight: 700;
    font-variant: small-caps;
  }
  & button {
    padding: 0.6em 1.2em;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: unset;

    font-size: 1.5rem;
    font-weight: 100;

    color: #1a1a1a;
    border: 1px solid #1a1a1a;
    background: transparent;
    text-transform: uppercase;
    &:hover {
      border-color: #ff971d;
      color: #ff971d;
      transform: translateY(-2px);
    }
  }
`

export { StyledMain }
