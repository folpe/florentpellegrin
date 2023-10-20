import styled from '@emotion/styled'

const StyledWork = styled.section`
  min-height: 748px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
    padding: 16px;
    & .item {
      width: calc(50vw - 32px);
      min-height: 30vw;
      background: #fbfbfb;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export { StyledWork }
