import React, { useState, useEffect } from 'react'
import { Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useStyles } from './ScrollToTop.styles'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const { classes } = useStyles()

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > window.innerHeight) {
      setVisible(true)
    } else if (scrolled <= window.innerHeight) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <Fab
      color="primary"
      size='large'
      aria-label="scroll back to top"
      onClick={scrollToTop}
      sx={{ display: visible ? 'inline-flex' : 'none', right: { xs: '5%', md: '2.5%' }, bottom: { xs: '5%', md: '7.5%' } }}
      className={classes.IconButton}
    >
      <KeyboardArrowUpIcon fontSize='large'/>
    </Fab>
  )
}

export default ScrollToTop
