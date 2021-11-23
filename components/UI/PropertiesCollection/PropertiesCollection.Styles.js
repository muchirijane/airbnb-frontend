import styled from 'styled-components'

// export const CollectionContainer = styled.a`
//   cursor: pointer;
//   text-decoration: none;
// `
export const CollectionContainer = styled.div`
  cursor: pointer;
  padding: 0 2rem;
  margin-top: 4rem;
`

export const PropertiesImgWrapper = styled.div`
  width: 280px;
  margin-bottom: 1rem;

  border-radius: 1rem;
  overflow: hidden;
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
  h3 {
    font-size: clamp(1.2rem, 0.8vw, 2.5rem);
    font-weight: 400;
    color: var(--dark-grey);
    margin-bottom: 0.5rem;
  }
  h4 {
    color: var(--dark-grey);
  }
  span {
    color: var(--dark-grey);
    font-weight: 400;
  }
`
