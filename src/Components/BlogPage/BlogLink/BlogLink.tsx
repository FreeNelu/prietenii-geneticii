import React, { useEffect, useState } from 'react'
import { useStyles } from './BlogLink.styles'
import { Box, Button, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { type BlogItem } from '../BlogItem'

import fallbackImage from 'Assets/fallbackImage.jpg'

interface BlogLinkProps {
  blog: BlogItem
}

function BlogLink (props: BlogLinkProps) {
  const { blog } = props
  const { classes, cx } = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  const [blogImage, setBlogImage] = useState<string>()

  const handleReadMoreClick = () => {
    navigate(`/blog/${blog.id}`)
  }

  const adjustBlogText = (blogDescription: string) => {
    const maxLength = 110
    return blogDescription.slice(0, maxLength) + '...'
  }

  const parseImage = (imageUrl: string) => {
    const img = new Image()
    img.onload = function () {
      // the image has loaded successfully
      setBlogImage(imageUrl)
    }
    img.onerror = function () {
      // there was an error loading the image
      setBlogImage(fallbackImage)
    }
    img.src = imageUrl
  }

  useEffect(() => {
    parseImage(blog.image ?? '')
  }, [])

  const desktopCard = (
    <CardContent className={classes.Content}>
      <Box
        component="img"
        className={classes.ImageBox}
        alt="Imaginea articolului"
        src={blogImage}
      />
      <Box className={classes.TextBox}>
        <Typography variant='h4' gutterBottom>
          {blog.title ?? 'Blog ' + blog.id}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {adjustBlogText(blog.text ?? '')}
        </Typography>
        <Button className={classes.ReadMoreButton} onClick={handleReadMoreClick}>
          <Typography variant="button" >
            Citește mai mult
          </Typography>
        </Button>
      </Box>
    </CardContent>
  )

  const mobileCard = (
    <CardContent className={cx(classes.Content, classes.MobileContent)}>
      <Box className={classes.TextBoxMobile}>
        <Typography variant='h4' gutterBottom>
          {blog.title ?? 'Blog ' + blog.id}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {adjustBlogText(blog.text ?? '')}
        </Typography>
      </Box>
      <Button className={classes.ReadMoreButtonMobile}>
        <Typography variant="button" onClick={handleReadMoreClick}>
          Citește mai mult
        </Typography>
      </Button>
    </CardContent>
  )

  return (
    <Card variant="outlined" className={classes.Container}>{isMobile ? mobileCard : desktopCard}</Card>
  )
}
export default BlogLink
