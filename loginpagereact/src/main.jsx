import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Home } from './Pages/Home/Home'

const themeColor = {
  dark: {
    primaryMain: '#CB4A86',
    textMain: '#CAC4D0',
    bgDark: '#1C1B1F',
    bgLight: '#49454F',
    textLight: '#938F99'
  },
  light: {
    primaryMain: '#cb4a86',
    textMain: '#525252',
    bgDark: '#eec4e3',
    bgLight: '#f2e5f3',
    textLight: '#b2abab'
  }
}

function getThemeColor(theme) {
  return theme === 'dark' ? themeColor.dark : themeColor.light
}

const theme = getThemeColor('light')

const GlobalStyle = createGlobalStyle`
  ${reset}


  :root {
    --primary-main: ${theme.primaryMain};
    --text-main:  ${theme.textMain};
    --bg-dark: ${theme.bgDark};
    --bg-light:  ${theme.bgLight};
    --text-light:  ${theme.textLight};
  }

  * {
    font-family: 'Nunito Sans';
    color: var(--text-main);
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
