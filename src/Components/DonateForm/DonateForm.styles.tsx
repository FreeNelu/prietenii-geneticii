import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Box: {
      height: 600,
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    TypeContainer: {
      display: 'flex',
      width: '100%',
      height: '20%',
      backgroundColor: 'yellow',
      justifyContent: 'center'
    }
  })
)
