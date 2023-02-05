import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    AppBar: {
      boxShadow: 'none'
    },
    Logo: {
      display: 'flex',
      marginTop: 32
    },
    LogoText: {
      fontFamily: 'monospace',
      fontWeight: 700,
      textDecoration: 'none',
      lineHeight: 1,
      pointerEvents: 'none',
      marginTop: 'auto',
      color: theme.pink
    },
    LogoText2: {
      color: theme.darkpink
    },
    PageButton: {
      color: theme.textPrimary,
      marginRight: 16,
      padding: '10px 20px',
      borderRadius: '12px 24px',
      height: '100%'
    },
    MenuIcon: {
      fontSize: '2rem'
    },
    RightBox: {
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
    Link: {
      textDecoration: 'none'
    }
  })
)
