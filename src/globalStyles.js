import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: inherit;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
