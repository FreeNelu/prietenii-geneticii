import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ImageBox: {
      width: '100%',
      position: 'absolute',
      left: 0,
      filter: 'grayscale(80%)'
    },
    PillText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
    },
    PillBox: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '30%',
      marginBottom: 92,
      zIndex: 99
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
    }
  })
)
