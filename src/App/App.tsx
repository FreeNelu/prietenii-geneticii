import Hero from 'Components/Hero/Hero'
import React from 'react'
import Header from '../Components/Header/Header'
import { useStyles } from './App.styles'
import { Routes, Route } from 'react-router-dom'
import BadRoute from './BadRoute'
import DonatePage from 'Components/DonatePage/DonatePage'

function App () {
  const { classes } = useStyles()

  return (
    <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<BadRoute />} />
        <Route path="blog" element={<BadRoute />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="*" element={<BadRoute />} />
      </Routes>
    </div>
  )
}

export default App
