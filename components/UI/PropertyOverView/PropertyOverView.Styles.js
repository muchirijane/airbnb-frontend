import styled from 'styled-components'

export const PropertyOverviewWrapper = styled.section`
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
