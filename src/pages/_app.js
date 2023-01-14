import React, { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import usePersistedState from '../utils/usePersistedState'
import GlobalStyle from '../styles/global'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
