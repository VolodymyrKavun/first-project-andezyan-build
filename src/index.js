import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import './index.scss';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/first-project-andezyan-build/">
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
