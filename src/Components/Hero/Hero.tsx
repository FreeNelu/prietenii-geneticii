import React from 'react'
import { useStyles } from './Hero.styles'
import Wave from 'Components/Icons/Wave'
import CustomCarousel from 'Components/CustomCarousel/CustomCarousel'
import ReversedWave from 'Components/Icons/ReversedWave'
import MainPage from 'Components/MainPage/MainPage'

function Hero () {
  const { classes } = useStyles()

  return (
        <>
            <MainPage/>
            <Wave className={classes.Wave} />
            <CustomCarousel className={classes.Carousel} containerClassName={classes.CarouselContainer}/>
            <ReversedWave className={classes.ReversedWave} />
        </>
  )
}

export default Hero
