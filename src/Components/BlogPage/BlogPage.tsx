import React, { useEffect, useState } from 'react'
import { useStyles } from './BlogPage.styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Loader from './Loader'
import BlogList from './BlogList/BlogList'

function BlogPage () {
  const { classes } = useStyles()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 1000)
  }, [])

  return (
    <Box className={classes.Container}>
        <Typography fontWeight={700} variant='h3'>
            <span className={classes.BlueShadow}>N</span>outăți<span className={classes.BlueShadow}>.</span>
        </Typography>
        { isLoading
          ? <Loader/>
          : <BlogList/>}
    </Box>
  )
}
export default BlogPage
