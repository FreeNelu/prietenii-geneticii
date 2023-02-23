import React from 'react'
import { useStyles } from './BlogPage.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Spinner from 'Components/Icons/Spinner.svg'

function Loader () {
  const theme = useTheme()
  const { classes } = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className={classes.Wrap}>
        <Box className={classes.Inner}>
            <img src={Spinner} alt="Spinner" />
        </Box>
    </Box>
  )
}
export default Loader
