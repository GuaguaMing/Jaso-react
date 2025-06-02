import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './AppShopCart';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
