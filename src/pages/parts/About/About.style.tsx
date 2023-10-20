import styled from '@emotion/styled'

const StyledAbout = styled.section`
  height: 748px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  & .container {
    padding: 80px 0;
    font-family: monospace;
    width: 900px;
    max-width: 100%;
    padding: 80px 60px;
    font-size: 0.9rem;
    line-height: 1.4rem;
    letter-spacing: 0.1rem;
  }
`

export { StyledAbout }
