import React from 'react'
import { useStyles } from './BlogDetails.styles'
import { Box } from '@mui/material'
import VerticalCarousel from 'Components/VerticalCarousel/VerticalCarousel'
import { useParams } from 'react-router-dom'

function BlogDetails () {
  const { classes } = useStyles()
  const { id } = useParams()

  return (
    <VerticalCarousel />
  )
}
export default BlogDetails
