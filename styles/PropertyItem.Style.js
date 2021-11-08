import styled from 'styled-components'
import { device } from '../GlobalStyles/GlobalStyles'

export const PropertyWrapper = styled.div`
  margin-top: 2rem;
`

export const PropertyTitle = styled.h1`
  font-size: 2rem;
  color: var(--dark-grey);
  margin-bottom: 1rem;
`
export const PropertyOverview = styled.div`
  font-size: 1.5rem;
  color: var(--dark-grey);
  display: flex;
  align-items: center;
  h4 {
    margin-right: 1rem;
    margin-left: 0.6rem;
  }
  h5 {
    color: var(--colour-grey);
  }
  svg {
    color: var(--colour-pink);
  }
`
export const PropertyStart = styled.span`
  display: contents;
  color: var(--colour-pink);
`
export const PropertySuperHost = styled.div`
  margin-left: 1rem;
`

export const PropertyPlace = styled.a`
  text-decoration: underline;
  color: var(--dark-grey);
  font-size: 1.4rem;
  margin-left: 1rem;
  cursor: pointer;
`

export const PropertyImageContainer = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`

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
export const PropertyImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  height: 100%;

  @media ${device.laptopM} {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media ${device.laptop} {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`

export const PropertyImageItems = styled.div`
  height: 100%;
`
