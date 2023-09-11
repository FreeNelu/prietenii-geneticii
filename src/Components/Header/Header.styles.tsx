import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    AppBar: {
      boxShadow: 'none'
    },
    Logo: {
      display: 'flex',
      marginTop: 32,
      textDecoration: 'none'
    },
    LogoIcon: {
      transition: 'height 0.5s'
    },
    LogoText: {
      transition: 'font-size 0.5s',
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
      transition: 'border-color 0s',
      color: theme.textPrimary,
      marginRight: 16,
      padding: '10px 20px',
      borderRadius: '12px 24px',
      height: '100%',
      '&.DisabledGreen': {
        borderBottom: '8px solid ' + theme.green,
        pointerEvents: 'none'
      },
      '&.DisabledBlue': {
        borderBottom: '8px solid ' + theme.blue,
        pointerEvents: 'none'
      },
      '&.DisabledPurple': {
        borderBottom: '8px solid ' + theme.purple,
        pointerEvents: 'none'
      },
      '&:hover': {
        backgroundColor: theme.backgroundSecondary
      }
    },
    MenuIcon: {
      fontSize: '2rem'
    },
    RightBox: {
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
    Link: {
      textDecoration: 'none',
      cursor: 'default'
    }
  })
)
