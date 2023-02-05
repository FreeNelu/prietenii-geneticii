import React from 'react'
import { useStyles } from './DonateForm.styles'
import { Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Quotes from 'Components/Icons/Quotes'

interface DonateFormProps {
  className?: string
  imageUrl?: string
}

function DonateForm (props: DonateFormProps) {
  const { classes, cx } = useStyles()

  return (
        <Card className={cx(classes.Card, props.className)}>
            <CardContent className={classes.Content}>
            </CardContent>
        </Card>
  )
}

export default DonateForm
