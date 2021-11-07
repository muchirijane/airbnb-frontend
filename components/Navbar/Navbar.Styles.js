import styled from 'styled-components'
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
  height: 8rem;
  position: relative;
`

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 1400px) {
    justify-content: space-between;
  }
`

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background-color: var(--colour-white);
    position: absolute;
    top: 8rem;
    right: 0;
    height: 50vh;
    box-shadow: var(--medium-shadow);
    padding: 3rem 2rem;
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

export const HostContainer = styled.div`
  a {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`
