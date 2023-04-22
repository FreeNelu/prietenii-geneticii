import Hero from 'Components/Hero/Hero'
import React from 'react'
import Header from '../Components/Header/Header'
import { useStyles } from './App.styles'
import { Routes, Route } from 'react-router-dom'
import BadRoute from './BadRoute'
import DonatePage from 'Components/DonatePage/DonatePage'
import BlogPage from 'Components/BlogPage/BlogPage'
import BlogDetails from 'Components/BlogPage/BlogDetails/BlogDetails'
import ScrollToTop from 'Components/ScrollToTop/ScrollToTop'

function App () {
  const { classes } = useStyles()

  return (
    <>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="about" element={<BadRoute />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="*" element={<BadRoute />} />
        </Routes>
        <a href="https://www.freepik.com">Freepik</a> <br/>
        <a href="https://www.rawpixel.com">Rawpixel</a>
      </div>
      <ScrollToTop/>
    </>
  )
}

export default App
