import React from 'react';
import ReactDOM from 'react-dom/client';
import { SalesProvider } from './state/SalesContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SalesProvider>
      <App />
    </SalesProvider>
  </React.StrictMode>
);
