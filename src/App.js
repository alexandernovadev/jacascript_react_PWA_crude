import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Logo />
    </div>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
)
