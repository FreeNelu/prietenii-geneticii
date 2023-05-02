import React from 'react'
import { useStyles } from './DonatePage.style'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import DonateForm from 'Components/DonateForm/DonateForm'

function DonatePage () {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes } = useStyles({ isMobile })

  return (
    <Box
      className={classes.Container}
      sx={{
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        }
      }}
    >
      <div className={classes.PageDescription}>
        <Typography gutterBottom fontWeight={700} variant="h3">
          <span className={classes.PinkShadow}>M</span>ulțumim
          <br /> pentru susținere<span className={classes.PinkShadow}>!</span>
        </Typography>
        <Typography gutterBottom variant="body1">
          Prin donațiile tale, poți să faci diferența în viețile celor afectați de boli genetice, oferindu-le sprijinul de care au nevoie.
        </Typography>
        <Typography variant="body2">
          Alătură-te nouă astăzi și ajută-ne să continuăm lupta pentru a îmbunătăți calitatea vieții acestor persoane vulnerabile și a familiilor lor.
        </Typography>
      </div>
      <Box className={classes.DonateBox}>
        <DonateForm className={classes.DonateForm}/>
      </Box>
    </Box>
  )
}

export default DonatePage
