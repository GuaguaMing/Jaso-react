import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GoTop from './1components/GoTop'; //我在天上飛

/* import './index.css' */
//import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename='/Jaso-react'>
  <GoTop/>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
)