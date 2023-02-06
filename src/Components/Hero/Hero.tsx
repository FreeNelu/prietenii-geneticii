import React from 'react'
import { useStyles } from './Hero.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import girlImage from 'Assets/girlImage.png'
import Wave from 'Components/Icons/Wave'
import CustomCarousel from 'Components/CustomCarousel/CustomCarousel'
import ReversedWave from 'Components/Icons/ReversedWave'
import Typography from '@mui/material/Typography'

function Hero () {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes } = useStyles()

  return (
        <>
            <Box className={classes.MainPageContainer} sx={{
              flexWrap: {
                xs: 'wrap', md: 'nowrap'
              }
            }}>
                <div className={classes.PageDescription} style={{
                  marginLeft: isMobile ? '5%' : '15%'
                }}>
                    <Typography gutterBottom fontWeight={700} variant='h3'>Împreună,<br/>vindecăm genetica.</Typography>
                    <Typography variant='subtitle1'>Alatura-te misiunii noastre și ajuta-ne să cercetăm, să prevenim și să vindecăm boli genetice prin donația ta.</Typography>
                    <Typography variant='caption'>“No one has ever become poor from giving.” – Anne Frank</Typography>
                </div>
                <Box
                    component="img"
                    sx={{
                      paddingRight: isMobile ? 0 : '15%',
                      minWidth: isMobile ? 284 : 300
                    }}
                    className={classes.ImageBox}
                    alt="Girl climbing stairs made out of DNA"
                    src={girlImage}
                />
            </Box >
            <Wave className={classes.Wave} />
            <CustomCarousel className={classes.Carousel} containerClassName={classes.CarouselContainer}/>
            <ReversedWave className={classes.ReversedWave} />
        </>
  )
}

export default Hero
