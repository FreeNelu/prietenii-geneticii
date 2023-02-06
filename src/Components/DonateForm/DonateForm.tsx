import React from 'react'
import { useStyles } from './DonateForm.styles'
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button/Button'

interface DonateFormProps {
  className?: string
  imageUrl?: string
}

function DonateForm (props: DonateFormProps) {
  const { classes, cx } = useStyles()

  return (
        <Box className={cx(classes.Box, props.className)}>
          <Box className={classes.TypeContainer}>
              <Button>Donație unică</Button>
              <Button>Donează lunar</Button>
          </Box>
        </Box>
  )
}

export default DonateForm
