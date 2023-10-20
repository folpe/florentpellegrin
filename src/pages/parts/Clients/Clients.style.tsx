import styled from '@emotion/styled'

const StyledClients = styled('section')`
  background: #f5f5f5;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  & .container {
    padding: 6rem 0;
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: space-between;
    & .item {
      width: calc(33% - 32px - 32px);
      & img {
        object-fit: contain;
        width: 100%;
        max-height: 75px;
      }
    }
  }
`

export { StyledClients }
