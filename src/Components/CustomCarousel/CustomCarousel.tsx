import React from 'react'
import { useStyles } from './CustomCarousel.styles'
import Carousel from 'react-material-ui-carousel'
import CustomCard from 'Components/Card/CustomCard'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'

interface ReviewsCarouselProps {
  className?: string
  containerClassName?: string
  bigText: string
  smallText: string
}

function ReviewsCarousel (props: ReviewsCarouselProps) {
  const { className, containerClassName, bigText, smallText } = props
  const { classes } = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className={containerClassName} sx={{
      flexWrap: {
        xs: 'wrap', md: 'nowrap'
      }
    }}>
      <Box className={classes.TextBox} sx={{
        paddingLeft: {
          md: '64px'
        },
        textAlign: {
          xs: 'center',
          md: 'left'
        }
      }}>
        <Typography variant={isMobile ? 'h3' : 'h2'} gutterBottom>
          {bigText}
        </Typography>
        <Typography variant={isMobile ? 'h5' : 'h4'}>
          {smallText}
        </Typography>
      </Box>
      <Carousel
        className={className}
        stopAutoPlayOnHover
        duration={750}
        navButtonsAlwaysVisible={false}
        indicatorIconButtonProps={{ className: classes.Indicator }}
        activeIndicatorIconButtonProps={{ className: classes.ActiveIndicator }}
        sx={{
          paddingTop: {
            xs: '64px',
            md: '192px'
          }
        }}
      >
        <CustomCard
          imageUrl="https://i.pravatar.cc/300"
          name="Person1"
          description="Test description1 Test description1 Test description1Test description1 Test description1 Test description1 Test description1Test description1 Test description1 Test description1 Test description1 Test description1 Test description1 Test description1 Test description1 Test description1"
        />
        <CustomCard
          imageUrl="https://i.pravatar.cc/300"
          name="Person2"
          description="Test description2 Test description2"
        />
      </Carousel>
    </Box>
  )
}

export default ReviewsCarousel
