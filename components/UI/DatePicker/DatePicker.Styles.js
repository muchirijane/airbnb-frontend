import styled from 'styled-components'

export const DatePickerContainer = styled.section`
  width: 37rem;
  position: relative;
  z-index: 500;
`
export const DatePickerWrapper = styled.div`
  width: 37.2rem;
  padding: 2.4rem;
  border-radius: 1rem;

  box-shadow: var(--big-shadow);
`
export const PropertyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`
export const PropertyPrice = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 2.2rem;
    color: var(--dark-grey);
    font-weight: 600;
  }
  span {
    font-size: 1.6rem;
    color: var(--colour-grey);
  }
`
export const PropertyReviews = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: var(--colour-pink);
    margin-right: 0.5rem;
  }

  h4 {
    color: var(--dark-grey);
    font-size: 1.4rem;
  }
  p {
    font-size: 1.4rem;
  }
`
export const DateContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const CheckDate = styled.div`
  display: flex;
  flex-direction: column;

  input,
  label {
    font-size: 1.2rem;
  }
  label {
    font-weight: 700;
    color: var(--dark-grey);
    text-transform: uppercase;
  }

  input {
    width: 80%;
    height: 3.2rem;
    background-color: transparent;
    margin-right: 1rem;

    border: none;
    font-size: 1.6rem;
    color: var(--dark-grey);

    &:focus {
      outline: none;
    }
  }
`
export const CheckDateWrapper = styled.div`
  display: flex;
  border: 1px solid var(--light-grey);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1rem;
`
export const GuestSelector = styled.div`
  border: 1px solid var(--light-grey);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4,
  p {
    font-size: 1.4rem;
  }
  h4 {
    color: var(--dark-grey);
  }
  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`
export const GuestOptionWrapper = styled.div`
  background-color: var(--colour-white);
  box-shadow: var(--big-shadow);
  width: 100%;
  padding: 1.2rem;
  margin: 0 auto;
  border-radius: 1rem;
  position: absolute;
  z-index: 1000;
  bottom: -12rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`
export const GuestOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
  font-size: 1.5rem;
`
export const GuestOptionText = styled.div`
  h4 {
    color: var(--dark-grey);
    font-weight: 600;
  }
  p {
    font-size: 1.4rem;
  }
`

export const ButtonOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  h3 {
    padding: 0 1rem;
  }
`
export const ButtonOption = styled.button`
  border: 1px solid var(--light-grey);
  background-color: var(--colour-white);

  padding: 1rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`
export const ButtonChecker = styled.button`
  background: rgb(218, 42, 102);
  background: linear-gradient(
    94deg,
    rgba(218, 42, 102, 1) 0%,
    rgba(204, 3, 71, 1) 67%
  );
  color: var(--colour-white);
  padding: 1.6rem 2rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      94deg,
      rgba(204, 3, 71, 1) 0%,
      rgba(218, 42, 102, 1) 80%
    );
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`
export const GuestRuleText = styled.p``
