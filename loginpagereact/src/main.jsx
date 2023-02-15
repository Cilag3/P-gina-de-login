import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Home } from './Pages/Home/Home'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    width: 100vw;
    height: 100vh;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)
