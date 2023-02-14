import React from 'react'
import ReactDOM from 'react-dom/client'
import { Reset } from 'styled-reset'
import { Home } from './Home/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Home />
  </React.StrictMode>
)
