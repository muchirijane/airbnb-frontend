import styled from 'styled-components'
import { device } from '../../../GlobalStyles/GlobalStyles'
export const PropertyMainImage = styled.div`
  height: 100%;
  img {
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    height: auto;
  }
  @media ${device.laptopM} {
    width: 100%;
  }
`
