import React from 'react';
import { useStyles } from './CustomCard.styles'
import { Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import Quotes from 'Components/Icons/Quotes';

type CustomCardProps = {
    className?: string;
    title: string;
    description: string
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
                    props.title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    props.description
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CustomCard;

