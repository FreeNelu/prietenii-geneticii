import { Box } from '@mui/material'
import BlogLink from 'Components/BlogPage/BlogLink/BlogLink'
import ScrollArrow from 'Components/Icons/ScrollArrow'
import React, { useRef } from 'react'
import { useStyles } from './VerticalCarousel.styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface VerticalCarouselProps {
  className?: string
}

function VerticalCarousel (props: VerticalCarouselProps) {
  const { classes } = useStyles()
  const slider = useRef<Slider>(null)

  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 4' },
    { id: 6, text: 'Item 4' },
    { id: 7, text: 'Item 4' }
  ]

  const settings = {
    accessibility: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    arrows: false
  }

  const onScroll = () => { if (slider?.current) { slider.current.slickNext() } }

  return (
    <Box
      sx={{ margin: { xs: '10% 10% 0% 10%', md: '5% 15% 0% 15%', lg: '2.5% 25% 0% 25%' } }}
    >
        <Slider ref={slider} {...settings}>
              {items.map((item, index) => (
                  <BlogLink key={index} id={item.id} />
              ))}
        </Slider>
        <ScrollArrow className={classes.Svg} onClick={onScroll}/>
    </Box>
  )
}

export default VerticalCarousel
