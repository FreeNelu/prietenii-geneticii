import MainPage from 'Components/MainPage/MainPage'
import React from 'react'
import Header from '../Components/Header/Header'
import { useStyles } from './App.styles'
import { Routes, Route, Outlet } from 'react-router-dom'
import BadRoute from './BadRoute'

function App () {
  const { classes } = useStyles()

  return (
    <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<BadRoute />} />
        <Route path="blog" element={<BadRoute />} />
        <Route path="donate" element={<BadRoute />} />
        <Route path="*" element={<BadRoute />} />
      </Routes>
    </div>
  )
}

export default App
