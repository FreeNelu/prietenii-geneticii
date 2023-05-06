import React, { useState } from 'react'
import { useStyles } from './CustomCard.styles'
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'
import Quotes from 'Components/Icons/Quotes'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

interface CustomCardProps {
  className?: string
  imageUrl?: string
  name: string
  description: string
}

function CustomCard (props: CustomCardProps) {
  const { classes, cx } = useStyles()
  const [isFullTextDisplayed, setIsFullTextDisplayed] = useState(false)
  const maxLength = 175

  const onExpandClick = () => {
    setIsFullTextDisplayed(!isFullTextDisplayed)
  }

  return (
    <Card className={cx(classes.Card, props.className)}>
      <CardMedia>
        <Quotes className={classes.Quotes} />
        <Avatar
          className={classes.Avatar}
          alt={props.name}
          src={props.imageUrl}
        />
      </CardMedia>
      <CardContent className={classes.Content}>
        <Typography gutterBottom variant="h5" sx={{ width: '80%' }}>
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isFullTextDisplayed
            ? props.description
            : `${props.description.slice(0, maxLength)}...`}
        </Typography>
        {props.description.length > maxLength && (
          <IconButton className={classes.IconButton} onClick={onExpandClick}>
            {isFullTextDisplayed
              ? (
              <KeyboardArrowUpIcon />
                )
              : (
              <KeyboardArrowDownIcon />
                )}
          </IconButton>
        )}
      </CardContent>
    </Card>
  )
}

export default CustomCard
