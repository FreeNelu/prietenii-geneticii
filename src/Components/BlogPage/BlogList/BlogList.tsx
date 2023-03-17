import React from 'react'
import { useStyles } from './BlogList.styles'
import { Box } from '@mui/material'
import VerticalCarousel from 'Components/VerticalCarousel/VerticalCarousel'

function BlogList () {
  const { classes } = useStyles()

  return (
    <VerticalCarousel />
  )
}
export default BlogList
