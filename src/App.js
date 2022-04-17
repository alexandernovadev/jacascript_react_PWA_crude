import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { NavBar } from './components/NavBar'

// const UserLogged = ({ children }) => children({ isAuth: false })
import Context from './Context'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Logo />
      </div>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailID' />
      </Router>

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth
            ? (
              <Router>
                <User path='/user' />
                <Favs path='/favs' />
              </Router>
              )
            : (
              <Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
              </Router>
              )}
      </Context.Consumer>

      <NavBar />
    </>
  )
}
