import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 64,
      paddingBottom: 128
    },
    PillBox: {
      minHeight: 300,
      display: 'flex',
      borderRadius: 64,
      background: 'white',
      position: 'relative',
      justifyContent: 'space-between',
      textAlign: 'center'
    },
    Liquid1: {
      backgroundColor: theme.green
    },
    Liquid2: {
      backgroundColor: theme.blue
    },
    Liquid3: {
      backgroundColor: theme.pink
    },
    Liquid4: {
      backgroundColor: theme.purple
    },
    Icon: {
      borderRadius: '100%',
      color: 'white',
      border: '8px solid ' + theme.background,
      transform: 'scale(0.75)',
      padding: 12,
      marginTop: -12
    },
    NoPaddingLeft: {
      paddingLeft: 0
    },
    NoPaddingRight: {
      paddingRight: 0
    },
    DonationButton: {
      backgroundColor: theme.green,
      marginTop: 32,
      borderRadius: '24px 12px',
      ':hover': {
        borderColor: theme.green,
        '& > svg': {
          color: theme.green
        }
      },
      '&.selected': {
        borderColor: theme.green,
        color: theme.green
      }
    }
  })
)
