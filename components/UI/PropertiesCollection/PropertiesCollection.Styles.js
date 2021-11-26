import styled from 'styled-components'
import { device } from '../../../GlobalStyles/GlobalStyles'
export const CollectionContainer = styled.div`
  cursor: pointer;
  @media ${device.tablet} {
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
  }
`

export const PropertiesImgWrapper = styled.div`
  width: 200px;
  margin-bottom: 1rem;

  border-radius: 1rem;
  overflow: hidden;

  @media ${device.Mlaptop} {
    width: 280px;
  }

  @media ${device.laptopB} {
    width: 180px;
  }
  @media ${device.laptopM} {
    width: 160px;
  }
  @media ${device.laptopS} {
    width: 260px;
  }
  @media ${device.laptop} {
    width: 200px;
  }
  @media ${device.tablet} {
    width: 96%;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
  @media ${device.mobileM} {
    width: 88%;
  }
`

export const ReviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  svg {
    color: var(--colour-pink);
    margin-right: 1rem;
  }
`

export const PropertiesContentWrapper = styled.div`
  @media ${device.tablet} {
    width: 60%;
  }
  h3 {
    font-size: clamp(1.2rem, 0.8vw, 2.5rem);
    font-weight: 400;
    color: var(--dark-grey);
    margin-bottom: 0.5rem;
    @media ${device.tablet} {
      font-size: clamp(1.2rem, 2.8vw, 2.5rem);
    }
  }
  h4 {
    color: var(--dark-grey);
    font-size: clamp(1.2rem, 0.8vw, 2.5rem);
    @media ${device.tablet} {
      font-size: clamp(1.2rem, 2.8vw, 2.5rem);
    }
  }
  span {
    color: var(--dark-grey);
    font-weight: 400;
  }
`
