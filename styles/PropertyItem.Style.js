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

export const PropertyImageContainer = styled.section`
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

export const PropertyImagesWrapper = styled.div`
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
