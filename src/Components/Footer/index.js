import React from 'react'
import { Container } from './style'

export const Footer = () => {
  return (
    <Container>
      <div className='about'>
        <h2>Sobre nós</h2>
        <p>
          Start up Technology dedicada em facilitar a idenfiticação e transporte de mercadoria.
        </p>
      </div>
      <div className='copy'>
        <h2>Logistic Incorporated</h2>
        <p>todos os direitos reservados</p>
      </div>
    </Container>
  )
}
