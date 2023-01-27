import React from 'react';
import { useStyles } from './ReviewsCarousel.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material';
import CustomCard from 'Components/Card/CustomCard';

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
            <CustomCard />
        </Box>
    );
}

export default ReviewsCarousel;

