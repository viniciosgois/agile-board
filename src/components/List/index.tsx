import React from 'react'

import { Card } from '../Card'

import { Container, ListHeader, ListHeaderText, PlusButton, CardList } from './styles'
import { MdAdd } from 'react-icons/md'

interface IList {
  category: string;
}

export const List: React.FC<IList> = ({ category }: IList) => {
  return (
    <Container>
      <ListHeader>
        <ListHeaderText>{category}</ListHeaderText>
        <PlusButton>
          <MdAdd size={24} color="#FFF"/>
        </PlusButton>
      </ListHeader>

      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </Container>
  )
}
