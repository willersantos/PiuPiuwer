import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Routes/auth';
import Rotas from './Routes/index';

import './Styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;