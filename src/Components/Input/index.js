import React from 'react'
import { Container } from './style'

export const Input = ({children, type, name, ...props}) => {
  return (
    <Container>
      <label htmlFor={name}>{children}</label>
      <input type={type} name={name} id={name} {...props} />
    </Container>
  )
}
