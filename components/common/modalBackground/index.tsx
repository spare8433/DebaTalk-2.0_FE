import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
  children: React.ReactNode
}

const ModalBackground = ({ children }: Props) => <Container>{children}</Container>

export default ModalBackground
