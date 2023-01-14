import React, { useContext } from "react"
import Switch from "react-switch"
import { ThemeContext } from "styled-components"

import { Container } from './styles'

interface Props {
  toggleTheme(): void;
}

export default function Header<Props>({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      header
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={30}
        offColor=""
        onColor={colors.secondary}
      />
    </Container>
  )
}
