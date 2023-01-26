import { createMakeAndWithStyles } from "tss-react";

function useTheme() {
    return {
        "background": "#ebefeb",
        "blue": "#01B5E3",
        "pink": "#E03D8C",
        "green": "#69C441",
        "darkgreen": "#60b43b",
    };
}

export const {
    makeStyles,
    withStyles,
    useStyles
} = createMakeAndWithStyles({ useTheme });