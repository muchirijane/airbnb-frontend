import styled from 'styled-components'

export const PropertyDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 5rem;
`
export const PropertyDetails = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  width: 80%;
`
export const PropertyDateWrapper = styled.div`
  grid-column: 3/3;
  grid-row: 1/2;
`
