import React from 'react'
import { useStyles } from './DonatePage.style'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import CustomCarousel from 'Components/CustomCarousel/CustomCarousel'
import ReversedWave from 'Components/Icons/ReversedWave'
import DonateForm from 'Components/DonateForm/DonateForm'

function DonatePage () {
  const theme = useTheme()
  const [isMonthlyDonation, setIsMonthlyDonation] = React.useState<boolean>(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes } = useStyles()

  return (
    <Box className={classes.Container} sx={{
      flexWrap: {
        xs: 'wrap', md: 'nowrap'
      }
    }}>
    <div className={classes.PageDescription} style={{ paddingLeft: isMobile ? '10%' : '5%' }}>
        <Typography gutterBottom fontWeight={700} variant='h3'>Mulțumim<br/> pentru susținere!</Typography>
        <Typography gutterBottom variant='body1'>Donațiile tale ne ajută să distribuim medicamente și să oferim sprijin celor afectați de boli genetice.</Typography>
        <Typography variant='body2'>Fii alături de noi în lupta împotriva acestora prin a alege o donație lunară sau una unică.</Typography>
    </div>
      <Box
          sx={{
            paddingRight: isMobile ? '10%' : 0
          }}
          className={classes.DonateBox}
      >
        <DonateForm/>
      </Box>
    </Box >
  )
}

export default DonatePage
