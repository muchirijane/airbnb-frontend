import styled from 'styled-components'

export const PropertiesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
`
export const PropertiesWrapper = styled.section`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
`

// export const propertiesFixedContainer = styled.section`
// ;
// `;
