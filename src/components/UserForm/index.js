import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useRegisterUser } from '../../hooks/useRegisterUser'
import { userLoginUser } from '../../hooks/userLoginUser'
import { Form, Title, Input, Button } from './styles'

export const UserForm = ({ onSubmit, type }) => {
  const [registerMutation, { data, loading, error }] = useRegisterUser()
  const [LoginUser, info] = userLoginUser()
  const [errorMsg, seterrorMsg] = useState('')
  const [load, setLoad] = useState(false)

  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    setLoad(true)
    seterrorMsg('')

    const input = { email, password }
    const variables = { input }

    console.log(info)
    // Todo Se puede optimizar

    if (type != 'LOGIN') {
      registerMutation({ variables })
        .then(x => onSubmit(x.data.signup))
        .catch(err => seterrorMsg(String(err)))
        .finally(() => setLoad(false))
    } else {
      LoginUser({ variables })
        .then(x => onSubmit(x.data.login))
        .catch(err => seterrorMsg(String(err)))
        .finally(() => setLoad(false))
    }
  }

  const { email, password } = formValues

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ padding: '16px' }}>
        <Title>{type == 'LOGIN' ? 'Inicio de Sesión' : 'Registrate !'} </Title>
        <span style={{ color: 'red' }}>{errorMsg}</span>
        <Input
          placeholder='Email'
          name='email'
          value={email}
          required
          onChange={handleInputChange}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          required
          onChange={handleInputChange}
        />
        <Button disabled={load}>
          {type == 'LOGIN' ? 'Entra' : 'Registrarme'}{' '}
        </Button>
      </Form>
    </>
  )
}
