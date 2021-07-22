import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginForm } from '../../Components/LoginComponents/LoginForm'
import { LoginRecover } from '../../Components/LoginComponents/LoginRecover'
import { LoginRegister } from '../../Components/LoginComponents/LoginRegister'

export const Login = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />}/>
      <Route path='/register' element={<LoginRegister />}/>
      <Route path='/recoverPassword' element={<LoginRecover />}/>
    </Routes>
  )
}
