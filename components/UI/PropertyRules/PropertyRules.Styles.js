import styled from 'styled-components'

export const RulesContainer = styled.section`
  margin: 3rem 0;
  border-top: 1px solid var(--light-grey);
  border-bottom: 1px solid var(--light-grey);
  padding: 2rem 0;
`
export const RulesItems = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`
export const RulesItemsIcon = styled.div`
  svg {
    font-size: 2.3rem;
    color: var(--dark-grey);
  }
  margin-right: 1rem;
`
export const RulesItemsText = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--dark-grey);
  }
`
