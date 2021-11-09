import styled from 'styled-components'

export const PropertyHostContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PropertyHostWrapper = styled.div``
export const PropertyHostImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
`
export const PropertyHostTitle = styled.div`
  h2 {
    font-size: 2rem;
    color: var(--dark-grey);
  }
`
export const PropertyHostItem = styled.div`
  display: flex;
`
export const PropertyHostContent = styled.div`
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`
