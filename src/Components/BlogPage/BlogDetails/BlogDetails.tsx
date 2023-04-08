import React from 'react'
import { useStyles } from './BlogDetails.styles'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { BlogItems } from '../BlogItem'
import BadRoute from 'App/BadRoute'
import FeedbackForm from 'Components/FeedbackForm/FeedbackForm'

function BlogDetails () {
  const { classes } = useStyles()
  const { id } = useParams()

  const item = BlogItems.find(item => item.id === Number(id))

  if (item === undefined) {
    return <BadRoute />
  } else {
    return (
    <Box className={classes.Container}>
      <Typography fontWeight={700} variant='h3' className={classes.Title}>
            <span className={classes.TitleShadow}>{item.title[0]}</span>{item.title.slice(1)}
      </Typography>

      <Box
        component="img"
        className={classes.Media}
        alt="Girl climbing stairs made out of DNA"
        src={item.image}
        sx={{
          width: { xs: '90%', md: '80%', lg: '60%' }
        }}
      />

      <Card className={classes.Root} sx={{
        width: { xs: '90%', md: '80%', lg: '60%' }
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

      <FeedbackForm/>
    </Box>
    )
  }
}
export default BlogDetails
