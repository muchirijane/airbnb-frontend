import styled from 'styled-components'

export const FooterContainer = styled.section`
  margin-top: 5rem;
  background-color: var(--medium-white);
  padding: 5rem 0;
`
export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 4rem;
  justify-items: center;
`
export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  h3 {
    margin-bottom: 1.2rem;
    color: var(--dark-grey);
    font-size: 1.4rem;
  }
  a {
    color: var(--dark-grey);
    text-decoration: none;
    font-size: 1.3rem;
    display: inline-block;
    margin-bottom: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Copyright = styled.div`
  border-top: 1px solid var(--light-grey);
  margin-top: 3rem;
  padding-top: 1.5rem;
  font-size: 1.3rem;
  text-align: center;
  color: var(--dark-grey);
`
