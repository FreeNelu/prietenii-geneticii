import React from 'react';
import { useStyles } from './MainPage.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material';
import girlImage from 'Assets/girlImage.png'
import Wave from 'Components/Icons/Wave';

type MainPageProps = {
};

function MainPage(props: MainPageProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { classes, cx } = useStyles();


    return (
        <>
            <Box className={classes.MainPageContainer} sx={{
                flexWrap: {
                    xs: 'wrap', md: 'nowrap'
                }
            }}>
                <div className={classes.PageDescription} style={{
                    marginLeft: isMobile ? 0 : "15%",
                }}>
                    <h1>Lorem Ipsum</h1>
                    <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
                    <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
                </div>
                <Box
                    component="img"
                    sx={{
                        paddingRight: isMobile ? 0 : "15%",
                    }}
                    className={classes.ImageBox}
                    alt="Girl climbing stairs made out of DNA"
                    src={girlImage}
                />
            </Box >
            <Wave className={classes.Wave} />
            <div style={{ width: "100%", height: "500px", backgroundColor: "#E03D8C", }} />
        </>
    );
}

export default MainPage;

