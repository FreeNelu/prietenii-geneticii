import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Wave: {
      fill: theme.pink,
      width: '100%',
      transform: 'translate(0, 10%)'
    },
    FooterContainer: {
      paddingTop: 64,
      backgroundColor: theme.pink,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      gap: 48
    },
    LinksContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '40%',
      gap: 6
    },
    Link: {
      textDecoration: 'none',
      cursor: 'default'
    },
    PageButton: {
      transition: 'border-color 0s',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '12px 24px',
      height: '100%',
      '&:hover': {
        backgroundColor: theme.darkpink
      }
    },
    IconButton: {
      borderRadius: '100%',
      backgroundColor: theme.background,
      color: theme.textPrimary,
      '&:hover': {
        backgroundColor: theme.backgroundSecondary
      },
      marginBottom: 12
    },
    Icon: {
      borderRadius: '100%',
      backgroundColor: theme.background,
      color: theme.textPrimary,
      '&:hover': {
        backgroundColor: theme.background,
        cursor: 'default'
      },
      marginBottom: 12
    },
    Logo: {
      display: 'flex',
      marginTop: 32,
      textDecoration: 'none'
    },
    LogoIcon: {
      transition: 'height 0.5s',
      filter: 'brightness(100)'
    },
    LogoText: {
      transition: 'font-size 0.5s',
      fontWeight: 700,
      textDecoration: 'none',
      lineHeight: 1,
      pointerEvents: 'none',
      marginTop: 'auto',
      color: theme.background
    },
    Ref: {
      color: theme.textPrimary
    },
    SocialLink: {
      color: theme.background,
      '&:hover': {
        backgroundColor: theme.darkpink
      }
    }
  })
)
