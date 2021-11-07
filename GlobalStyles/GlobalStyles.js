import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
:root{
  --colour-white: #fff;
  --medium-white: #f7f7f7;
  --colour-grey: #717171;
  --light-grey: #dddddd;
  --colour-black: #000;
  --dark-grey: #222222;
  --colour-pink: #ff385c;
  --medium-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  --light-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  
}

html{
    font-size: 62.5%;
    box-sizing: border-box;
}

body{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 1.3px;
  font-weight: 400;
 background-color: var(----colour-white);
  color: var(--colour-grey);
}


   
`

export default GlobalStyles

export const MainContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
`
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
