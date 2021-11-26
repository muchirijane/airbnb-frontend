import styled from 'styled-components'
import { device } from '../GlobalStyles/GlobalStyles'
export const PropertiesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`
export const PropertiesWrapper = styled.section`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media ${device.Mlaptop} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media ${device.laptopB} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

export const PropertiesPlaceWrapper = styled.section`
  margin-top: 5rem;
  h2 {
    font-size: 1.8rem;
    color: var(--dark-grey);
    margin-bottom: 1rem;
  }
`

export const PropertiesPlaceContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    width: 100vw;
  }
`
