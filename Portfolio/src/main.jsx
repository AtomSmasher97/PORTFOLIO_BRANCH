import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './CSS/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/PORTFOLIO_BRANCH/'>
    <App />
  </BrowserRouter>
)
