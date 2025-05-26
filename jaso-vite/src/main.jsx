<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
=======
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 73ec9058dc6dccc4de78c0fda59f9ca1a743a20a
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
