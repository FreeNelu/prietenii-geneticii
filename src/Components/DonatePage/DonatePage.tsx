import React from 'react'
import { useStyles } from './DonatePage.style'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import DonateForm from 'Components/DonateForm/DonateForm'

function DonatePage () {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes } = useStyles({ isMobile })

  return (
    <Box className={classes.Container} sx={{
      flexWrap: {
        xs: 'wrap', md: 'nowrap'
      }
    }}>
    <div className={classes.PageDescription} >
        <Typography gutterBottom fontWeight={700} variant='h3'><span className={classes.PinkShadow}>M</span>ulțumim<br/> pentru susținere<span className={classes.PinkShadow}>!</span></Typography>
        <Typography gutterBottom variant='body1'>Donațiile tale ne ajută să distribuim medicamente și să oferim sprijin celor afectați de boli genetice.</Typography>
        <Typography variant='body2'>Fii alături de noi în lupta împotriva acestora prin a alege o donație lunară sau una unică.</Typography>
    </div>
      <Box
          className={classes.DonateBox}
      >
        <DonateForm/>
      </Box>
    </Box >
  )
}

export default DonatePage
