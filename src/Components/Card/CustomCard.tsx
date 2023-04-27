import React from 'react'
import { useStyles } from './CustomCard.styles'
import { Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Quotes from 'Components/Icons/Quotes'

interface CustomCardProps {
  className?: string
  imageUrl?: string
  name: string
  description: string
}

function CustomCard (props: CustomCardProps) {
  const { classes, cx } = useStyles()

  return (
        <Card className={cx(classes.Card, props.className)}>
            <CardMedia>
                <Quotes className={classes.Quotes} />
                <Avatar className={classes.Avatar} alt={props.name} src={props.imageUrl}/>
            </CardMedia>
            <CardContent className={classes.Content}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
  )
}

export default CustomCard
