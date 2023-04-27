import { Box, Typography } from '@mui/material'
import BlogLink from 'Components/BlogPage/BlogLink/BlogLink'
import ScrollArrow from 'Components/Icons/ScrollArrow'
import React, { useRef } from 'react'
import { useStyles } from './VerticalCarousel.styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { type BlogItem } from 'Components/BlogPage/BlogItem'

interface VerticalCarouselProps {
  className?: string
  blogs: BlogItem[]
}

function VerticalCarousel (props: VerticalCarouselProps) {
  const { className, blogs } = props
  const { classes } = useStyles()
  const slider = useRef<Slider>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const settings = {
    accessibility: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    arrows: false
  }

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault()
  }

  React.useEffect(() => {
    const container = containerRef.current

    if (container) {
      container.addEventListener('touchmove', handleTouchMove, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [])

  const onScroll = () => {
    if (slider?.current) {
      slider.current.slickNext()
    }
  }

  const Blogs = () => {
    if (blogs.length === 0) return <Typography variant='h6'>Blog-urile sunt în progres, revin-o în curând!</Typography>
    return [blogs.map((blog, index) => <BlogLink key={index} blog={blog} />)]
  }

  return (
    <Box
      sx={{
        margin: {
          xs: '4px 10% 0% 10%',
          md: '4px 15% 0% 15%',
          lg: '4px 25% 0% 25%'
        }
      }}
      ref={containerRef}
    >
      {blogs.length <= 2
        ? (
            Blogs()
          )
        : (
        <>
          <Slider ref={slider} {...settings}>
            {Blogs()}
          </Slider>
          <ScrollArrow className={classes.Svg} onClick={onScroll} />
        </>
          )}
    </Box>
  )
}

export default VerticalCarousel
