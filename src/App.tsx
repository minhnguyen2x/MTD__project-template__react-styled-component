import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './Router';
import ConnectedIntlProvider from './ConnectedIntl';
import { LANG_KEY } from './constants/locale';
import { createGlobalStyle } from 'styled-components';
import { getTheme } from './constants/theme';
import { ThemeProvider } from 'styled-components';
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
  font-family: monospace;
  font-size:1.6rem;
}
`;

function App() {
  return (
    <Provider store={store}>
      <ConnectedIntlProvider locale={LANG_KEY.EN}>
        <ThemeProvider theme={getTheme()}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </ConnectedIntlProvider>
    </Provider>
  );
}

export default App;
