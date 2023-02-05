import { makeStyles } from 'Theme'

export const useStyles = makeStyles<{ open: boolean }>()(
  (theme, { open }) => ({
    Box: {
      backgroundColor: theme.pink
    },
    Drawer: {
      position: 'fixed',
      zIndex: 999,
      width: '100%',
      height: '100%',
      background: theme.darkpink,
      display: 'flex',
      alignItems: 'center',
      left: '0',
      transition: 'top 1s',
      top: open ? 0 : '-100%'
    },
    CloseButton: {
      position: 'absolute',
      top: 42,
      right: 18,
      cursor: 'pointer',
      padding: 0,
      transition: 'transform 1s',
      ':hover': {
        transform: 'rotate(-180deg)',
        background: theme.darkpink
      }
    },
    CloseIcon: {
      stroke: theme.textPrimary,
      width: 36,
      height: 36,
      padding: 8
    },
    Links: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      height: '75%',
      width: '100%',
      justifyContent: 'space-evenly',
      zIndex: 1
    },
    DefaultLinks: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '25%'
    },
    DonateLink: {
      display: 'flex',
      justifyContent: 'center',
      textDecoration: 'none',
      width: '80%'
    },
    Link: {
      textDecoration: 'none',
      width: '65%',
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '24px 12px',
      color: theme.textPrimary,
      padding: '16px 16px',
      ':hover': {
        background: theme.darkpink,
        color: 'white'
      }
    },
    DonateButton: {
      background: 'white',
      color: theme.textPrimary,
      width: '80%'
    },
    ReversedWave: {
      fill: theme.pink,
      transform: 'scale(5)'
    },
    WaveContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    }
  })
)
