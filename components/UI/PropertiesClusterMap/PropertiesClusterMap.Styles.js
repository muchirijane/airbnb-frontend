import styled from 'styled-components'
import { device } from '../../../GlobalStyles/GlobalStyles'

export const ClusterMapContainer = styled.section`
  @media ${device.laptopS} {
    display: none;
  }
`

export const ClusterPin = styled.div`
  height: 3rem;
  width: 5rem;
  background-color: var(--colour-white);
  color: var(--dark-grey);
  display: grid;
  place-items: center;
  border-radius: 2rem;
`
