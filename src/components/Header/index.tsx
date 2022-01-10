import React from 'react'

import { Container, HeaderTitle } from './style'

export function Header () {
  const headerText = 'Agile Board'

  return (
    <Container>
        <HeaderTitle>{headerText}</HeaderTitle>
    </Container>
  )
}
