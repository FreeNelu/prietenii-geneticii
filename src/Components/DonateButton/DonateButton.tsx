import React from 'react'
import { useStyles } from './DonateButton.styles'
import { Button, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

interface DonateButtonProps {
  className?: string
  onClick?: () => void
  invertColors?: boolean
}

function DonateButton (props: DonateButtonProps) {
  const { classes, cx } = useStyles({ invertColors: props.invertColors })

  return (
    <Button
        onClick={props.onClick}
        className={cx(classes.DonateButton, props.className)}
    >
        <FavoriteIcon className={classes.HeartIcon}/>
        <Typography variant='h6'>Donate</Typography>
    </Button>
  )
}

export default DonateButton
