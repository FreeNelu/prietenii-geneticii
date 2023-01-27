import React from 'react';
import { useStyles } from './CustomCard.styles'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import Quotes from 'Components/Icons/Quotes';

type CustomCardProps = {
    className?: string
};

function CustomCard(props: CustomCardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { classes, cx } = useStyles();

    return (
        <Card className={cx(classes.Card, props.className)}>
            <CardMedia>
                <Quotes className={classes.Quotes} />
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CustomCard;

