import { Home } from './Pages/Home/Home'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'react-toggle/style.css'
import { useEffect, useState } from 'react'

export function App() {
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
  useEffect(() => {
    const teste = window.localStorage.getItem('theme')
    typeof teste === 'string' && setTheme(teste)
  }, [])

  const [theme, setTheme] = useState('light')

  function getThemeColor() {
    return theme === 'dark' ? themeColor.dark : themeColor.light
  }

  function toggleTheme() {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const currentTheme = getThemeColor()

  const GlobalStyle = createGlobalStyle`
    ${reset}
  
  
    :root {
      --primary-main: ${currentTheme.primaryMain};
      --text-main:  ${currentTheme.textMain};
      --bg-dark: ${currentTheme.bgDark};
      --bg-light:  ${currentTheme.bgLight};
      --text-light:  ${currentTheme.textLight};
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

  return (
    <>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} theme={theme} />
    </>
  )
}
