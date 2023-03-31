import React, { useEffect, useState } from 'react'
import { useStyles } from './BlogPage.styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import BlogList from './BlogList/BlogList'

function BlogPage () {
  const { classes } = useStyles()

  return (
    <Box className={classes.Container}>
        <Typography fontWeight={700} variant='h3' className={classes.Text}>
            <span className={classes.BlueShadow}>N</span>outăți<span className={classes.BlueShadow}>.</span>
        </Typography>
        <BlogList/>
    </Box>
  )
}
export default BlogPage
