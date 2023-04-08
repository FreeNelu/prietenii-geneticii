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
    <Box className={classes.Container}>
      <Typography variant="h4" className={classes.Title}>
        {item.title}
      </Typography>

      <Box
        component="img"
        className={classes.Media}
        alt="Girl climbing stairs made out of DNA"
        src={item.image}
        sx={{
          width: { xs: '100%', md: '80%', lg: '60%' }
        }}
      />

      <Card className={classes.Root} sx={{
        width: { xs: '100%', md: '80%', lg: '60%' }
      }} >
        <CardContent className={classes.Content}>
          <Typography className={classes.Date} variant="subtitle1">
            {item.date}
          </Typography>
          <Typography className={classes.Description} variant="body1">
            {item.text ?? item.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
    )
  }
}
export default BlogDetails
