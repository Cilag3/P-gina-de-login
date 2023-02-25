import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Home } from './Pages/Home/Home'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: 'Nunito Sans';
    color: #525252;
  }
  button {
    cursor: pointer;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Nunito Sans'
  }

  p { 
    font-size: 12px;
    line-height: 16px;
  
      }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)
