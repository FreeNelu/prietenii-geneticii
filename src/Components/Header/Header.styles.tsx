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
      color: '#E03D8C'
    },
    PageButton: {
      color: theme.textPrimary,
      marginRight: 12
    },
    DonateButton: {
      color: 'white',
      backgroundColor: theme.green,
      padding: '10px 20px',
      fontWeight: 700,
      ':hover': {
        backgroundColor: theme.darkgreen
      }
    },
    MenuIcon: {
      fontSize: '2rem'
    },
    RightBox: {
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
    MenuItem: {
      cursor: 'pointer',
      borderBottom: '4px solid',
      borderColor: theme.textPrimary,
      height: 64,
      ':hover': {
        color: 'white',
        height: 82,
        p: {
          fontSize: 20,
          fontWeight: 700
        }
      }
    },
    MenuItemPink: {
      borderTopLeftRadius: '36px',
      borderTopRightRadius: '36px',
      ':hover': {
        background: theme.pink
      }
    },
    MenuItemBlue: {
      ':hover': {
        background: theme.blue
      }
    },
    MenuItemGreen: {
      color: 'white',
      background: theme.green,
      borderBottomLeftRadius: '32px',
      borderBottomRightRadius: '32px',
      ':hover': {
        background: theme.darkgreen
      },
      p: {
        fontSize: 20,
        fontWeight: 700
      }
    },
    Menu: {
      minWidth: 250,
      border: '5px solid',
      borderColor: theme.textPrimary,
      borderRadius: '42px',
      backgroundColor: theme.background,
      padding: 0
    }
  })
)
