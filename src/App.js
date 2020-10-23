import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexRoutes from './routes';

import { AuthProvider } from './hooks/auth';
import { GlobalStyles } from './global';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <IndexRoutes />
        </BrowserRouter>
        <GlobalStyles />
      </AuthProvider>
    </>
  );
}

export default App;
