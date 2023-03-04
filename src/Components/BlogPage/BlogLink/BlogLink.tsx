import React from 'react'
import { useStyles } from './BlogLink.styles'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'

function BlogLink () {
  const { classes } = useStyles()
  const card = (
    <CardContent className={classes.Content}>
      <Box
        component="img"
        className={classes.ImageBox}
        alt="Imaginea articolului"
        src={'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/landscape-books.jpg'}
      />
      <Box className={classes.TextBox}>
        <Typography variant='h4' gutterBottom>
          Blog Title
        </Typography>
        <Typography variant="body1" gutterBottom>
          This blog is about lorem ipsum. This blog is about lorem ipsum. This blog is about lorem ipsum. This blog is about lorem ipsum.
        </Typography>
        <Button className={classes.ReadMoreButton}>
          <Typography variant="button" >
            Citește mai mult
          </Typography>
        </Button>
      </Box>
    </CardContent>
  )

  return (
    <Card variant="outlined" className={classes.Container}>{card}</Card>
  )
}
export default BlogLink
