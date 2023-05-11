import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; //allows to use rem like a decimal 2.4 = 24px ; 2.2rem = 22px ...
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 2.4rem;
    font-family: 'Montserrat', sans-serif;
  }
`;
