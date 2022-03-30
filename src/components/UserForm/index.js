import React from 'react'
import { useForm } from '../../hooks/useForm'

export const UserForm = ({ onSubmit }) => {
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  })
  const { email, password } = formValues

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button>Iniciar Sesión</button>
      </form>
      <button onClick={reset}>Borrar todo</button>
    </>
  )
}
