import React from 'react'
import { useStyles } from './CustomCarousel.styles'
import Carousel from 'react-material-ui-carousel'
import CustomCard from 'Components/Card/CustomCard'

interface ReviewsCarouselProps {
  className?: string
}

function ReviewsCarousel (props: ReviewsCarouselProps) {
  const { className } = props
  const { classes } = useStyles()

  return (
    <Carousel
      className={className}
      stopAutoPlayOnHover
      swipe
      navButtonsAlwaysVisible
      animation='slide'
      indicatorIconButtonProps={{ className: classes.Indicator }}
      activeIndicatorIconButtonProps={{ className: classes.ActiveIndicator }}
      navButtonsProps={{ className: classes.Arrow }}
    >
      <CustomCard title='Test title' description='test description' />
      <CustomCard title='Test title' description='test description' />
      <CustomCard title='Test title' description='test description' />
      <CustomCard title='Test title' description='test description' />
      <CustomCard title='Test title' description='test description' />
    </Carousel >
  )
}

export default ReviewsCarousel
