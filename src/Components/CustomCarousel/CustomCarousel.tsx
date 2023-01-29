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
      duration={750}
      navButtonsAlwaysVisible={false}
      indicatorIconButtonProps={{ className: classes.Indicator }}
      activeIndicatorIconButtonProps={{ className: classes.ActiveIndicator }}
    >
      <CustomCard imageUrl='https://i.pravatar.cc/300' name='Person1' description='Test description1 Test description1 Test description1Test description1 Test description1 Test description1 Test description1Test description1 Test description1 Test description1 Test description1 Test description1 Test description1 Test description1 Test description1 Test description1' />
      <CustomCard imageUrl='https://i.pravatar.cc/300' name='Person2' description='Test description2 Test description2' />
      <CustomCard imageUrl='https://i.pravatar.cc/300' name='Person3' description='Test description3 Test description3 Test description3' />
      <CustomCard imageUrl='https://i.pravatar.cc/300' name='Person4' description='Test description4 Test description4 Test description4 Test description4 Test description4 Test description4 Test description4 Test description4' />
      <CustomCard imageUrl='https://i.pravatar.cc/300' name='Person5' description='Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5 Test description5' />
    </Carousel >
  )
}

export default ReviewsCarousel
