import { makeStyles } from "Theme";

export const useStyles = makeStyles()(
    (theme) => ({
        AppBar: { boxShadow: "none" },
        Logo: {
            display: "flex",
            marginTop: 32,
        },
        LogoText: {
            fontFamily: 'monospace',
            fontWeight: 700,
            textDecoration: 'none',
            lineHeight: 1,
            pointerEvents: 'none',
            marginTop: "auto",
            color: '#E03D8C',
        },
        PageButton: {
            color: theme.blue,
            marginRight: 12,
        },
        DonateButton: {
            color: "white",
            backgroundColor: theme.green,
            padding: "8px 12px",
            ':hover': {
                backgroundColor: theme.darkgreen,
            },
        },
        MenuIcon: {
            fontSize: "2rem"
        },
        RightBox: {
            flexGrow: 1,
            justifyContent: "flex-end",
        },
        DropdownTextHighlight: {
            color: theme.green
        }
    })
);