import React from 'react'
import { useStyles } from './BlogList.styles'
import { Box } from '@mui/material'
import BlogLink from '../BlogLink/BlogLink'

function BlogPage () {
  const { classes } = useStyles()

  return (
    <Box className={classes.Container} sx={{ margin: { xs: '10% 5% 0% 5%', md: '5% 15% 0% 15%' } }}>
        <BlogLink/>
        <BlogLink/>
    </Box>
  )
}
export default BlogPage
