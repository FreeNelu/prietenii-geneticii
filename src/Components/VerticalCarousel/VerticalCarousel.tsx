import { Box } from '@mui/material'
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
  items: BlogItem[]
}

function VerticalCarousel (props: VerticalCarouselProps) {
  const { className, items } = props
  const { classes } = useStyles()
  const slider = useRef<Slider>(null)

  const settings = {
    accessibility: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    arrows: false
  }

  const onScroll = () => { if (slider?.current) { slider.current.slickNext() } }

  return (
    <Box
      sx={{ margin: { xs: '4px 10% 0% 10%', md: '4px 15% 0% 15%', lg: '4px 25% 0% 25%' } }}
    >
        <Slider ref={slider} {...settings}>
              {items.map((item, index) => (
                  <BlogLink key={index} item={item} />
              ))}
        </Slider>
        <ScrollArrow className={classes.Svg} onClick={onScroll}/>
    </Box>
  )
}

export default VerticalCarousel
