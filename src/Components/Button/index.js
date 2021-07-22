import React from 'react'
import { Container } from './style'

export const Button = ({children, width, ...props}) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}
