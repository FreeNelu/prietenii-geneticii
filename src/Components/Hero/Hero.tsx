import React from 'react'
import { useStyles } from './Hero.styles'
import Wave from 'Components/Icons/Wave'
import CustomCarousel from 'Components/CustomCarousel/CustomCarousel'
import ReversedWave from 'Components/Icons/ReversedWave'
import MainPage from 'Components/MainPage/MainPage'
import GoalsSection from 'Components/Pills/GoalsSection/GoalsSection'
import { Box } from '@mui/material'

function Hero () {
  const { classes } = useStyles()

  return (
    <>
      <MainPage />
      <Wave className={classes.Wave} />
      <CustomCarousel
        className={classes.Carousel}
        containerClassName={classes.CarouselContainer}
      />
      <Box sx={{ position: 'relative' }}>
        <ReversedWave className={classes.ReversedWave} />
      </Box>
      <GoalsSection />
    </>
  )
}

export default Hero
