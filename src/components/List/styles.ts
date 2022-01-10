import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`

export const ListHeader = styled.header`
  height: 42px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListHeaderText = styled.h2`
  padding: 0 10px;

  font-weight: 600;
  font-size: 16px;
`

export const PlusButton = styled.button`
  width: 42px;
  height: 42px;

  border: 0;
  border-radius: 18px;
  background: #3b5bfd;

  cursor: pointer;
`

export const CardList = styled.ul`
  margin-top: 30px;
`
