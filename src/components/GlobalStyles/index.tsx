import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border:0;
  box-sizing: border-box;
}

:root {
}

html {
  font-size:62.5%
}

body {
  background-color: #fbfbfb;
  color: #fff;
  overflow-x: hidden;
  font-size:1.6rem;
  font-family:"Roboto"
}
`;

export default GlobalStyles;
