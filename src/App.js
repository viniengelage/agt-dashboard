import React from 'react';
import Sidebar from './components/menu';
import logo from './logo.svg';
import IndexRoutes from './routes';

import {AuthProvider} from './hooks/auth'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <IndexRoutes/>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
