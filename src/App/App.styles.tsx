import { makeStyles } from "Theme";

export const useStyles = makeStyles()(
    (theme) => ({
        "App": {
            "height": "100vh",
            "background-color": theme.background,
        }
    })
);