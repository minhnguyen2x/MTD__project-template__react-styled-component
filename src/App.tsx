import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './Router';
import ConnectedIntlProvider from './ConnectedIntl';
import { LANG_KEY } from './constants/locale';
import { getTheme } from './constants/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';

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
