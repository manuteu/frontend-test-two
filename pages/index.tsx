import React from 'react'
import Header from './components/Header'

import { GetServerSideProps } from 'next'
import GlobalStyle from './styles/global'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'

export default function Home({ carsData }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <h1>Home</h1>
        <ul>
          {carsData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  const data = await response.json()
  const dataMap = data.map((item: any) => item.nome)
  console.log(data.map);


  return {
    props: {
      carsData: dataMap
    }
  }
}
