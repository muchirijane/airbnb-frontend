import styled from 'styled-components'
import { ImHome3 } from 'react-icons/im'
import { SiAirbnb } from 'react-icons/si'

export const PropertyContainer = styled.section`
  margin-top: 5rem;
  h2 {
    color: var(--dark-grey);
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
`

export const PropertyPin = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-color: #ad1a6e;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    background-color: rgb(171 48 70 / 42%);
    top: -4rem;
    left: -5rem;
    z-index: -1;
  }
  svg {
    position: absolute;
    top: 25px;
    left: 25px;
    transform: translate(-40%, -40%);
    font-size: 2.5rem;
    color: var(--colour-white);
  }
`
