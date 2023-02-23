import React from 'react'
import { useStyles } from './BlogPage.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import Loader from './Loader'

function BlogPage () {
  const theme = useTheme()
  const { classes } = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const BlogLink = () => {
    return (<Box className={classes.BlogLink}></Box>)
  }

  return (
    <Box className={classes.Container}>
        <Typography fontWeight={700} variant='h2'>
            <span className={classes.BlueShadow}>N</span>outăți<span className={classes.BlueShadow}>.</span>
        </Typography>
        <Loader/>
    </Box>
  )
}
export default BlogPage
