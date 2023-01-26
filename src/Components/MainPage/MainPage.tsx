import React from 'react';
import { useStyles } from './MainPage.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material';
import girlImage from 'Assets/girlImage.png'

type MainPageProps = {
};

function MainPage(props: MainPageProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { classes, cx } = useStyles();


    return (
        <div>
            <Box
                component="img"
                sx={{
                    maxHeight: 800,
                    maxWidth: 400,
                }}
                alt="Girl climbing stairs made out of DNA"
                src={girlImage}
            />
        </div>
    );
}

export default MainPage;

