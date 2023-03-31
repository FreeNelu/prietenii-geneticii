import React from 'react'
import { useStyles } from './BlogDetails.styles'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { BlogItems } from '../BlogItem'
import BadRoute from 'App/BadRoute'

function BlogDetails () {
  const { classes } = useStyles()
  const { id } = useParams()

  const item = BlogItems.find(item => item.id === Number(id))

  if (item === undefined) {
    return <BadRoute />
  } else {
    return (
    <>
      <Typography variant="h4" className={classes.Title}>
        {item.title}
      </Typography>
      <Card className={classes.Root} sx={{
        width: { xs: '100%', md: '80%', lg: '60%' }
      }} >
        <CardMedia className={classes.Media} image={item.image} />
        <CardContent className={classes.Content}>
          <Typography className={classes.Date} variant="subtitle1">
            {item.date}
          </Typography>
          <Typography className={classes.Description} variant="body1">
            {item.text ?? item.description}
          </Typography>
        </CardContent>
      </Card>
    </>
    )
  }
}
export default BlogDetails
