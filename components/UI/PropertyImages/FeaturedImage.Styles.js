import styled from 'styled-components'
import { device } from '../../../GlobalStyles/GlobalStyles'
export const PropertyMainImage = styled.div`
  height: 100%;
  img {
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    height: auto;
    transition: all 0.3s ease-in-out;
    position: relative;

    &:hover {
      transform: scale(1.1);
      filter: brightness(0.8);
    }
  }
  @media ${device.laptopM} {
    width: 100%;
  }
`
