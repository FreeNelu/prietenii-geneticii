import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from './BlogLink.styles'
import { Box, Button, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface BlogLinkProps {
  id: number
}

function BlogLink (props: BlogLinkProps) {
  const { classes } = useStyles()
  const textBox = useRef<HTMLDivElement>()
  const [textBoxWidth, setTextBoxWidth] = useState(999)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      if (textBox.current) {
        setTextBoxWidth(textBox.current.offsetWidth)
      }
    }

    window.addEventListener('resize', handleResize)
  })

  const handleReadMoreClick = () => {
    navigate(`/blog/${props.id}`)
  }

  const adjustBlogDescription = (containerWidth: number, blogDescription: string) => {
    if (containerWidth < 415) {
      const maxLength = 110
      return blogDescription.slice(0, maxLength) + '...'
    }

    return blogDescription
  }

  const desktopCard = (
    <CardContent className={classes.Content}>
      <Box
        component="img"
        className={classes.ImageBox}
        alt="Imaginea articolului"
        src={'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/landscape-books.jpg'}
      />
      <Box className={classes.TextBox} ref={textBox}>
        <Typography variant='h4' gutterBottom>
          Blog Title
        </Typography>
        <Typography variant="body1" gutterBottom>
          {adjustBlogDescription(textBoxWidth, 'This blog is about lorem ipsum. This blog is about lorem ipsum. This blog is about lorem ipsum. This blog is about lorem ipsum.')}
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
    <CardContent className={classes.Content}>
      <Box
        component="img"
        className={classes.ImageBoxMobile}
        alt="Imaginea articolului"
        src={'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/landscape-books.jpg'}
      />
      <Box className={classes.TextBoxMobile}>
        <Typography variant='h4' gutterBottom>
          Blog Title
        </Typography>
        <Typography variant="body1" gutterBottom>
          {adjustBlogDescription(textBoxWidth, 'This blog is about lorem ipsum. This blog is about lorem ipsum. This blog is about lorem ipsum. This blog is about lorem ipsum.')}
        </Typography>
      </Box>
      <Button className={classes.ReadMoreButtonMobile}>
        <Typography variant="button" >
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
