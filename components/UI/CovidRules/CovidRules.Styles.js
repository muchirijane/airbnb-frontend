import styled from 'styled-components'

export const CovidContainer = styled.section`
  h3 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`

export const CovidButton = styled.button`
  border-radius: 5px;
  border: none;
  color: var(--colour-black);
  margin-top: 1rem;
  padding-right: 0.8rem;

  background-color: transparent;

  text-decoration: underline;
  display: inline-block;
  font-weight: bold;
  font-size: 1.7rem;

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: var(--colour-pink);
  }
`
