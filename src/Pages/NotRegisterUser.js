import React from 'react'
import Context  from '../Context'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({isAuth,activateAuth})=>(
          <button onClick={activateAuth}>
            {String(isAuth)}-{" "}
            Iniciar Sesuib</button>
        )
      }
    </Context.Consumer>
  )
}
