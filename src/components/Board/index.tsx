import React from 'react'

import { List } from '../List'

import { Container } from './styles'

export const Board = () => {
  return (
    <Container>
      <List category="Todo"/>
      <List category="Doing"/>
      <List category="Done"/>
    </Container>
  )
}
