import React from 'react';
import { useStyles } from './ReviewsCarousel.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material';

type ReviewsCarouselProps = {
    className?: string
};

function ReviewsCarousel(props: ReviewsCarouselProps) {
    const { className } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { classes } = useStyles();

    return (
        <Box className={className}>
        </Box>
    );
}

export default ReviewsCarousel;

