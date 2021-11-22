import styled from 'styled-components'
import { device } from '../../../GlobalStyles/GlobalStyles'

export const PropertyDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 5rem;

  @media ${device.laptopM} {
    display: flex;
    flex-direction: column;
  }
`
export const PropertyDetails = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  width: 80%;

  @media ${device.laptopM} {
    width: 100%;
  }
`
export const PropertyDateWrapper = styled.div`
  grid-column: 3/3;
  grid-row: 1/2;
  @media ${device.laptopM} {
    margin-bottom: 5rem;
  }
`
