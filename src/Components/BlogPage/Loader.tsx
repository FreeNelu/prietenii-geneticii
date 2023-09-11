import React from 'react'
import { useStyles } from './BlogPage.styles'
import { Box } from '@mui/material'
import Spinner from 'Components/Icons/Spinner.svg'

interface LoaderProps {
  className?: string
}

function Loader (props: LoaderProps) {
  const { classes, cx } = useStyles()

  return (
    <Box className={classes.Wrap}>
        <Box className={cx(classes.Inner, props.className)}>
            <img src={Spinner} alt="Spinner" />
        </Box>
    </Box>
  )
}
export default Loader
