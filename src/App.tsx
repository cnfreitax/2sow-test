import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyles from './styles/global';

import { ToastProvider } from './hooks/toast';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <>
      <BrowserRouter>
        <ToastProvider>
          <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme} />
            <Routes />
            <GlobalStyles />
          </ThemeProvider>
        </ToastProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
