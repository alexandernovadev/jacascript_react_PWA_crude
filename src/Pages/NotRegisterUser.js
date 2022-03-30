import React from 'react'
import { UserForm } from '../components/UserForm'
import Context  from '../Context'

export const NotRegisterUser = () => {
  const onSubm = (e)=> {
    console.log(e);
  }
  return (
    <Context.Consumer>
      {
        ({isAuth,activateAuth})=>(
          <>
            <UserForm onSubmit={activateAuth}/>
          </>
        )
      }
    </Context.Consumer>
  )
}
