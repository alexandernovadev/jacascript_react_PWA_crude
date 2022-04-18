import React, { useEffect, useState } from 'react'

const URL = 'http://localhost:3500/users'

export const User = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = () => {
      fetch(URL)
        .then(res => res.json())
        .then(resp => {
          setUsers(resp)
        })
    }
    getUsers()
  }, [])

  return (
    <div style={{ padding: 12 }}>
      <h3>Usuarios</h3>
      {users.map(user => (
        <div key={user.id} style={{ display: 'flex', padding: 12 }}>
          <img
            src={user.avatar}
            style={{ borderRadius: '30px', padding: 8 }}
            alt='' width={60} height={60}
          />
          <h5>{user.email}</h5>
        </div>
      ))}
    </div>
  )
}
