import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './styles/global';

import { ToastProvider } from './hooks/toast';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
