import { makeStyles } from "Theme";

export const useStyles = makeStyles()(
    (theme) => ({
        Card: { borderRadius: 24 },
        Quotes: {
            width: 48,
            marginTop: 24,
            marginLeft: 24
        }
    })
);