import styled from 'styled-components'
import { device } from '../../GlobalStyles/GlobalStyles'
export const Header = styled.header`
  background-color: var(--colour-white);
  box-shadow: var(--medium-shadow);
`

export const HeaderWrapper = styled.div`
  max-width: 1600px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9rem;
  position: relative;
`

export const NavbarContainer = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  z-index: 1000;
  background-color: var(--colour-white);
  position: absolute;
  top: 8rem;
  right: 0;
  border-radius: 1.5rem;
  box-shadow: var(--big-shadow);

  @media (min-width: 24px) {
  }
`

export const NavbarItem1 = styled.div`
  display: flex;
  flex-direction: column;

  a:link,
  a:visited {
    color: var(--colour-black);
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
    padding: 1rem 3rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--medium-white);
    }
  }
`
export const NavbarItem2 = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--light-grey);
  padding-top: 2rem;
  transition: all 0.3s ease-in-out;

  a:link,
  a:visited {
    color: var(--colour-grey);
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
    padding: 1rem 3rem;
    &:hover {
      background-color: var(--medium-white);
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 6rem;
  background-color: var(--colour-white);
  border-radius: 30rem;
  box-shadow: var(--medium-shadow);
  padding: 1rem 2rem;

  @media ${device.laptop} {
    display: none;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 0.5rem;
    font-size: 1.6rem;
    color: var(--colour-black);

    &::placeholder {
      color: var(--colour-grey);
    }

    &:focus {
      outline: transparent;
    }
  }
  label {
    width: 90%;
  }

  button {
    margin-left: 1rem;
    width: 3rem;
    height: 3rem;
    background-color: var(--colour-pink);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    svg {
      color: var(--colour-white);
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
    width: 80%;
  }
`

export const ProfileContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;

  background-color: var(--colour-white);
  border-radius: 30rem;
  border: 1px solid #a1a1a1;
  box-shadow: var(--light-shadow);

  margin-left: 4rem;
  cursor: pointer;

  svg {
    font-size: 2.2rem;
    margin-right: 1rem;
    color: var(--dark-grey);
  }
`

export const ProfileImage = styled.div`
  img {
    border-radius: 50%;
  }
`
