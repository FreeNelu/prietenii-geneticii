import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Box: {
      height: 600,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    TypeContainer: {
      display: 'flex',
      width: '100%',
      color: theme.textPrimary,
      justifyContent: 'center'
    },
    SelectedType: {
      backgroundColor: theme.pink,
      color: 'white',
      pointerEvents: 'none'
    },
    RegularButton: {
      color: theme.textPrimary,
      backgroundColor: 'white'
    }
  })
)
