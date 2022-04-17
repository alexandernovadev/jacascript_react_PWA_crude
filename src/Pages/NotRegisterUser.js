import React from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth, registerUser }) => {
        const onSubmit = (token) => {
          token && activateAuth(token)
        }

        return (
          <>
            <UserForm onSubmit={onSubmit} type='LOGIN' />
            <UserForm onSubmit={onSubmit} type='REGISTER' />
          </>
        )
      }}
    </Context.Consumer>
  )
}
