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
      marginRight: 12,
      padding: '10px 20px',
      borderRadius: '12px 24px'
    },
    MenuIcon: {
      fontSize: '2rem'
    },
    RightBox: {
      flexGrow: 1,
      justifyContent: 'flex-end'
    }
  })
)
