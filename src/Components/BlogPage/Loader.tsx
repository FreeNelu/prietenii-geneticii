import React from 'react'
import { useStyles } from './BlogPage.styles'
import { Box } from '@mui/material'
import Spinner from 'Components/Icons/Spinner.svg'

function Loader () {
  const { classes } = useStyles()

  return (
    <Box className={classes.Wrap}>
        <Box className={classes.Inner}>
            <img src={Spinner} alt="Spinner" />
        </Box>
    </Box>
  )
}
export default Loader
