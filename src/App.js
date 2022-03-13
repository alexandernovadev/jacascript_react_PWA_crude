import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'

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
    </>
  )
}
