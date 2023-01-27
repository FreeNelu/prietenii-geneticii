import zIndex from "@mui/material/styles/zIndex";
import { maxHeight } from "@mui/system";
import { makeStyles } from "Theme";

export const useStyles = makeStyles()(
    (theme) => ({
        MainPageContainer: {
            display: "flex",
            marginTop: 64,
        },
        Wave: {
            position: "absolute",
            fill: theme.pink,
            width: "100%",
            transform: "rotate(180deg) scaleY(-1) translate(0, -99%)",

        },
        PageDescription: {
            float: "left",
            minWidth: 284,
            minHeight: 400,
            flex: 1,
        },
        ImageBox: {
            maxWidth: 400,
            minWidth: 284,
            width: "100%",
            alignSelf: "center",
            margin: "0px auto",
            flex: 1,
        }
    })
);