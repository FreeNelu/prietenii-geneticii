import MainPage from 'Components/MainPage/MainPage'
import React from 'react'
import Header from '../Components/Header/Header'
import { useStyles } from './App.styles'

function App () {
  const { classes } = useStyles()

  return (
    <div className={classes.App}>
      <Header />
      <MainPage />
    </div>
  )
}

export default App
